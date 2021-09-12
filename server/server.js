require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { CLIENT_ORIGIN } = require("./config");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let server;
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const http = require("http");

//schemas
const appointmentsSchema = require("./schemas/appointments/appointments.schema");
const scansSchema = require("./schemas/scans/scans.schema");
const transactionsSchema = require("./schemas/transactions/transactions.schema");

// const queries = require("./schemas/queries");
// const mutations = require("./schemas/mutations");
// const root = require("./schemas/root");

mongoose.connect("mongodb://localhost:27017/patient_billing_portal", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

app.use(express.json());

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "10000kb" }));

// parse application/json
app.use(bodyParser.json({ limit: "10000kb", extended: true }));

// var schema = buildSchema(`
// ${userSchema}${productSchema}${reviewSchema}${imageSchema}${specificationsSchema}${tagsSchema}${categorySchema}${recentItemsSchema}${queries}${mutations}
// `);

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

app.use(express.static(path.join(__dirname, "build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build", "/index.html"));
});

server = http.createServer(app);

server.listen(4000, () => console.log(`Server ready at http://localhost:4000`));

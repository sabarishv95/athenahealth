const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  paidAmount: {
    type: Number,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transactions", transactionsSchema);

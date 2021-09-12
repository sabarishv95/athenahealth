const resolvers = require("./resolvers");

module.exports = {
  createAppointment: resolvers.createAppointment,
  searchAppointments: resolvers.searchAppointments,
};

const resolvers = require("./resolvers");

module.exports = {
  createAppointment: resolvers.createAppointment,
  searchAppointments: resolvers.searchAppointments,
  addTransaction: resolvers.addTransaction,
  getAppointment: resolvers.getAppointment,
};

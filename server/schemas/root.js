const resolvers = require("./resolvers");

module.exports = {
  createAppointment: resolvers.createAppointment,
  getAppointments: resolvers.getAppointments,
};

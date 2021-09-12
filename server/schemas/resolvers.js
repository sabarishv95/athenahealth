const Appointments = require("../models/appointments/appointments.model");
const Scans = require("../models/scans/scans.model");
const Transactions = require("../models/transactions/transactions.model");

module.exports = {
  createAppointment: function (data) {
    const appointment = Appointments.create(data.appointment);
    return appointment;
  },
  getAppointments: function () {
    const appointments = Appointments.find(data)
      .populate("medicalScanDetails")
      .populate("transactions");
    return appointments;
  },
};

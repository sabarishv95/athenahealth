const Appointments = require("../models/appointments/appointments.model");
const Scans = require("../models/scans/scans.model");
const Transactions = require("../models/transactions/transactions.model");

module.exports = {
  createAppointment: async function (data) {
    let { appointment } = data;
    let createdAppointment;
    const scanIds = [];
    return new Promise((resolve) => {
      appointment.medicalScanDetails.forEach((scan, index) => {
        delete scan.Sno;
        Scans.create(scan)
          .then((response) => {
            scanIds.push(response._id);
            if (index + 1 === appointment.medicalScanDetails.length) {
              resolve(response);
            }
          })
          .catch((error) => {
            resolve(error);
          });
      });
    }).then(async (res) => {
      delete appointment.medicalScanDetails;
      appointment = {
        ...appointment,
        medicalScanDetails: scanIds,
      };
      createdAppointment = await Appointments.create(appointment);
      createdAppointment = await createdAppointment
        .populate("medicalScanDetails")
        .populate("transactions")
        .execPopulate();
      return JSON.parse(JSON.stringify(createdAppointment));
    });
  },
  getAppointments: function () {
    const appointments = Appointments.find(data)
      .populate("medicalScanDetails")
      .populate("transactions");
    return appointments;
  },
};

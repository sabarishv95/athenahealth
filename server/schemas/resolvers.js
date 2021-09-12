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
      appointment = {
        ...appointment,
        medicalScanDetails: scanIds,
      };
      createdAppointment = await Appointments.create(appointment);
      createdAppointment = await createdAppointment
        .populate("medicalScanDetails")
        .populate("transactions")
        .execPopulate();
      return createdAppointment;
    });
  },

  searchAppointments: function (data) {
    const query = {};
    const { fromDate, toDate, status, patientName } = data;
    if (fromDate) {
      query.appointmentDate = {
        $gte: new Date(fromDate),
      };
    }
    if (toDate) {
      query.appointmentDate = {
        ...query.appointmentDate,
        $lte: new Date(toDate),
      };
    }
    if (status) {
      query.status = status;
    }
    if (patientName) {
      query.patientName = new RegExp(patientName, "i");
    }
    const appointments = Appointments.find(query)
      .populate("medicalScanDetails")
      .populate("transactions");
    return appointments;
  },

  addTransaction: async function (data) {
    const { transactions, appointment, transaction } = data;
    const createdTransaction = await Transactions.create(transaction);
    const updatedAppointment = Appointments.findOneAndUpdate(
      { _id: appointment },
      { transactions: [...transactions, createdTransaction._id] },
      {
        new: true,
      }
    )
      .populate("medicalScanDetails")
      .populate("transactions");
    return updatedAppointment;
  },
};

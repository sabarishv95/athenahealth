const mongoose = require("mongoose");

const appointmentsSchema = new mongoose.Schema({
  salutation: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  ageType: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Not Paid"
  },
  medicalScanDetails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Scans",
    },
  ],
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transactions",
    },
  ],
});

module.exports = mongoose.model("Appointments", appointmentsSchema);

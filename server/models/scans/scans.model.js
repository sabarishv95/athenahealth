const mongoose = require("mongoose");

const scansSchema = new mongoose.Schema({
  scanName: {
    type: String,
    required: true,
  },
  scanAmount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Scans", scansSchema);

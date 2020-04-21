const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  loan_amount: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
  paid: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema);

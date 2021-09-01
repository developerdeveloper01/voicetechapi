const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    sortorder: {
      type: Number,
    },
    status: {
      type: String,
      default: "Active",
    },
    r_calldetails: {
      type: Boolean,
      default: false,
    },
    w_calldetails: {
      type: Boolean,
      default: false,
    },
    r_userdetails: {
      type: Boolean,
      default: false,
    },
    w_userdetails: {
      type: Boolean,
      default: false,
    },
    r_sip: {
      type: Boolean,
      default: false,
    },
    w_sip: {
      type: Boolean,
      default: false,
    },
    r_ivr: {
      type: Boolean,
      default: false,
    },
    w_ivr: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("role", roleSchema);

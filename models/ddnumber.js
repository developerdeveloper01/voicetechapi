const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ddnumberSchema = new Schema(
  {
    ddnumber: {
      type: Number,
    },
    ip: { type: Schema.Types.ObjectId, ref: "providedip" },
    alottedtouser: { type: Schema.Types.ObjectId, ref: "user" },
    ivr: { type: String },
    extensions: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ddnum", ddnumberSchema);

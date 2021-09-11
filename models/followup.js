const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    inquiry: { type: Schema.Types.ObjectId, ref: "inquiry" },
    product: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("followup", userSchema);

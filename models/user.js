const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userimg: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png",
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    password: {
      type: String,
    },
    organization_name: {
      type: String,
    },
    companyName: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

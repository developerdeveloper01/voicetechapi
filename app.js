const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Middleware
const user = require("./routes/user");
const staff = require("./routes/staff");
const role = require("./routes/role");
const inquiry = require("./routes/inquiry");
const providedip = require("./routes/providedip");

//Use
app.use("/api", user);
app.use("/api", staff);
app.use("/api", role);
app.use("/api", inquiry);
app.use("/api", providedip);

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 5555, () => {
  console.log(`listening..... on port ${process.env.PORT}`);
});

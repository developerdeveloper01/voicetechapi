const User = require("../models/user");

const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const key = "verysecretkey";
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    mobile,
    password,
    organization_name,
    companyName,
  } = req.body;

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newuser = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    mobile: mobile,
    password: hashPassword,
    organization_name: organization_name,
    companyName: companyName,
  });

  const findexist = await User.findOne({
    $or: [{ email: email }, { mobile: mobile }],
  });
  if (findexist) {
    res.status(400).json({
      status: false,
      msg: "User Already Exists",
      data: {},
    });
  } else {
    newuser
      .save()
      .then((result) => {
        const token = jwt.sign(
          {
            userId: result._id,
          },
          key,
          {
            expiresIn: 86400000,
          }
        );
        res.header("auth-token", token).status(200).json({
          status: true,
          token: token,
          msg: "success",
          user: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error,
        });
      });
  }
};

exports.login = async (req, res) => {
  const { mobile, email, password } = req.body;
  const user = await User.findOne({
    $or: [{ mobile: mobile }, { email: email }],
  });
  if (user) {
    const validPass = await bcrypt.compare(password, user.password);
    if (validPass) {
      const token = jwt.sign(
        {
          userId: user._id,
        },
        key,
        {
          expiresIn: 86400000,
        }
      );
      res.header("auth-token", token).status(200).send({
        status: true,
        token: token,
        msg: "success",
        user: user,
      });
    } else {
      res.status(400).json({
        status: false,
        msg: "Incorrect Password",
        error: "error",
      });
    }
  } else {
    res.status(400).json({
      status: false,
      msg: "User Doesnot Exist",
      error: "error",
    });
  }
};

exports.setting = async (req, res) => {
  const updatedChange = await User.findOneAndUpdate(
    { _id: req.userId },
    { $set: req.body },
    { new: true }
  )
    .then((updatedChange) => {
      res.json({
        msg: "Changes done",
        updatedChange,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

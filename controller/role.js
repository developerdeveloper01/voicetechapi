const Role = require("../models/role");

exports.addrole = async (req, res) => {
  const {
    name,
    sortorder,
    status,
    r_calldetails,
    w_calldetails,
    r_userdetails,
    w_userdetails,
    r_sip,
    w_sip,
    r_ivr,
    w_ivr,
  } = req.body;

  const newRole = new Role({
    name: name,
    sortorder: sortorder,
    status: status,
    r_calldetails: r_calldetails,
    w_calldetails: w_calldetails,
    r_userdetails: r_userdetails,
    w_userdetails: w_userdetails,
    r_sip: r_sip,
    w_sip: w_sip,
    r_ivr: r_ivr,
    w_ivr: w_ivr,
  });

  const findexist = await Role.findOne({ name: name });
  if (findexist) {
    res.status(400).json({
      status: false,
      msg: "Already Exists",
      data: {},
    });
  } else {
    newRole
      .save()
      .then((result) => {
        res.status(200).json({
          status: true,
          msg: "success",
          data: result,
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

exports.editrole = async (req, res) => {
  const findandUpdateEntry = await Role.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  );
  if (findandUpdateEntry) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findandUpdateEntry,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};

exports.viewonerole = async (req, res) => {
  const findone = await Role.findOne({ _id: req.params.id });
  if (findone) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findone,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};

exports.allrole = async (req, res) => {
  const findall = await Role.find().sort({ sortorder: 1 });
  if (findall) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findall,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};

exports.deleterole = async (req, res) => {
  try {
    const deleteentry = await Role.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: true,
      msg: "success",
      data: deleteentry,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "error",
      error: error,
    });
  }
};

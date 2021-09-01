const express = require("express");
const router = express.Router();

const {
  addstaff,
  editstaff,
  viewonestaff,
  allstaff,
  deletestaff,
} = require("../controller/staff");

//Paths
router.post("/admin/addstaff", addstaff);
router.post("/admin/editstaff/:id", editstaff);
router.get("/admin/viewonestaff/:id", viewonestaff);
router.get("/admin/allstaff", allstaff);
router.get("/admin/deletestaff/:id", deletestaff);

module.exports = router;

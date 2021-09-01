const express = require("express");
const router = express.Router();

const {
  addinquiry,
  editinquiry,
  viewoneinquiry,
  allinquiry,
  deleteinquiry,
} = require("../controller/inquiry");

//Paths
router.post("/user/addinquiry", addinquiry);
router.post("/user/editinquiry/:id", editinquiry);
router.get("/user/viewoneinquiry/:id", viewoneinquiry);
router.get("/user/allinquiry", allinquiry);
router.get("/user/deleteinquiry/:id", deleteinquiry);

module.exports = router;

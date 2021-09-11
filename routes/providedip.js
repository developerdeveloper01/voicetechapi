const express = require("express");
const router = express.Router();

const {
  addprovidedip,
  editprovidedip,
  viewoneprovidedip,
  allprovidedip,
  deleteprovidedip,
} = require("../controller/providedip");

//Paths
router.post("/admin/addprovidedip", addprovidedip);
router.post("/admin/editprovidedip/:id", editprovidedip);
router.get("/admin/viewoneprovidedip/:id", viewoneprovidedip);
router.get("/admin/allprovidedip", allprovidedip);
router.get("/admin/deleteprovidedip/:id", deleteprovidedip);

module.exports = router;

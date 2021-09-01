const express = require("express");
const router = express.Router();

const {
  addrole,
  editrole,
  viewonerole,
  allrole,
  deleterole,
} = require("../controller/role");

//Paths
router.post("/admin/addrole", addrole);
router.post("/admin/editrole/:id", editrole);
router.get("/admin/viewonerole/:id", viewonerole);
router.get("/admin/allrole", allrole);
router.get("/admin/deleterole/:id", deleterole);

module.exports = router;

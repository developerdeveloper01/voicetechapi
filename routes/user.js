const express = require("express");
const router = express.Router();
const { verifyToken } = require("../functions/verifytoken");

const { signup, login, setting } = require("../controller/user");

router.post("/user/signup", signup);
router.post("/user/login", login);
router.post("/user/setting", verifyToken, setting);

module.exports = router;

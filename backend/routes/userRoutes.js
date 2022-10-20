const express = require("express");
const router = express.Router();
const { logInUser, registerUser } = require("../controllers/userControllor");

router.post("/", registerUser);
router.post("/login", logInUser);

module.exports = router;

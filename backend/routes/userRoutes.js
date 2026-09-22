const express = require("express");
const router = express.Router();
const { signupUserPersonal, signupUserOrganization, loginUser } = require("../controllers/userController");

//login
router.post("/login", loginUser);
//signup personal
router.post("/signup/personal", signupUserPersonal);
//signup organization
router.post("/signup/organization", signupUserOrganization);


module.exports = router;
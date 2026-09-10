const express = require("express");
const { getCompanies, getCompany, createCompany, updateCompany, deleteCompany } = require("../controllers/companiesController");

const router = express.Router();

//get opportunities
router.get("/", getCompanies);
//get opportunity
router.get("/:id", getCompany);
//create opportunity
router.post("/", createCompany);
//update opportunity
router.patch("/:id", updateCompany);
//delete opportunity
router.delete("/:id", deleteCompany);

module.exports = router;
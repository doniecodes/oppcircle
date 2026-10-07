const express = require("express");
const { getCompanies, getCompany, createCompany, updateCompany, deleteCompany } = require("../controllers/companiesController");
const requireOrganization = require("../middlewares/requireOrganization");

const router = express.Router();

//get opportunities
router.get("/", getCompanies);
//get opportunity
router.get("/company", requireOrganization, getCompany);
//create opportunity
router.post("/", createCompany);
//update opportunity
router.patch("/company/edit", updateCompany);
//delete opportunity
router.delete("/:id", deleteCompany);

module.exports = router;
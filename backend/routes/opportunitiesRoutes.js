const express = require("express");
const { getOpportunities, getOpportunitiesFeatured, getOpportunity, createOpportunity, updateOpportunity, deleteOpportunity } = require("../controllers/opportunitiesController");

const router = express.Router();

//get opportunities
router.get("/", getOpportunities);
//get featured opportunities
router.get("/featured", getOpportunitiesFeatured);
//get opportunity
router.get("/:id", getOpportunity);
//create opportunity
router.post("/", createOpportunity);
//update opportunity
router.patch("/:id", updateOpportunity);
//delete opportunity
router.delete("/:id", deleteOpportunity);

module.exports = router;
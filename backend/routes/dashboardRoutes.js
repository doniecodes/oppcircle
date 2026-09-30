const express = require("express");
const router = express.Router();
const { getDashboardOpportunities, getIndustries, getLocations } = require("../controllers/dashboardController");

//getDashboardOpportunities
router.get("/opportunities", getDashboardOpportunities);
//get industries
router.get("/industries", getIndustries);
//get locations
router.get("/locations", getLocations);

module.exports = router;
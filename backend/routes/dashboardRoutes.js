const express = require("express");
const router = express.Router();
const { getDashboardOpportunities } = require("../controllers/dashboardController");

//getDashboardOpportunities
router.get("/opportunities", getDashboardOpportunities);

module.exports = router;
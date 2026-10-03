const pool = require("../data/pg")

const getDashboardOpportunities = async (req, res)=> {
  
  const company_id = req.company_id;
  const { offset } = req.query;
  
  try {
    const opportunities = await pool.query("SELECT *, name as company_name FROM opportunities JOIN companies ON opportunities.company_id = companies.id WHERE company_id = $1 ORDER BY opportunities.created_at DESC OFFSET $2 LIMIT 5", [company_id, offset]);
    res.status(201).json({opportunities: opportunities.rows});
  } catch (error) {
    console.log(error)
    res.status(404).json({error: "Could not fetch opportunities, please try again later"});
  }
}

//get industries
const getIndustries = async (req, res)=> {
  try {
    const industries = await pool.query("SELECT * FROM industries");
    res.status(201).json({industries: industries.rows});
  } catch (error) {
    res.status(404).json({error: "Could not fetch industries, try again later"});
  }
}

//get locations
const getLocations = async (req, res)=> {
  try {
    const locations = await pool.query("SELECT * FROM locations ORDER BY city ASC");
    res.status(201).json({locations: locations.rows});
  } catch (error) {
    res.status(404).json({error: "Could not fetch locations, try again later"});
  }
}


module.exports = { getDashboardOpportunities, getIndustries, getLocations }
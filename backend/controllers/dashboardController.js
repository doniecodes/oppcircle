const pool = require("../data/pg")

const getDashboardOpportunities = async (req, res)=> {
  const userId = "01993b2a-7c41-7e8a-9f23-4d6b8a1c2057";
  const offsetCount = 1;
  
  try {
    const oppprtunities = await pool.query("SELECT * FROM opportunities WHERE company_id = $1 OFFSET $2 LIMIT 5 ORDER BY created_at DESC", [userId, offsetCount]);
    console.log(opportunities);
  } catch (error) {
    res.status(404).json({error: "Could not fetch opportunities, please try again later"});
  }
}


module.exports = { getDashboardOpportunities }
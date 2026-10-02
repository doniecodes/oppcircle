const jwt = require("jsonwebtoken");
const pool = require("../data/pg");
const SECRET = process.env.PUBLIC_SECRET;

const requireOrganization = async (req, res, next)=> {
  
  const { authorization } = req.headers;
  
  if(!authorization) {
    return res.status(404).json({error: "Authorization required"});
  }
  
  try {
  const token = authorization.split(" ")[1];
  const verify = await jwt.verify(token, SECRET);
  const { id } = verify;
  
  const user = await pool.query("SELECT * FROM profiles WHERE id = $1", [id]);
  
  if(user.rows.length === 0) {
  return res.status(404).json({error: "Authorization required"});
  }
  
  const companyId = user.rows[0].company_id;
  
  req.company_id = companyId;
  next();
  
  } catch (error) {
    res.status(500).json({error: "User is not authorized"});
  }
}


module.exports = requireOrganization
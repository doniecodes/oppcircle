const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const pool = require("../data/pg");
const { uuidv7 } = require("uuidv7");

const SECRET = process.env.PUBLIC_SECRET;

//signToken
const signToken = (id) => {
  const token = jwt.sign({ id }, SECRET, {
    expiresIn: "3D"
  });

  return token;
};

//login
const loginUser = async(req, res)=> {
  const { email, password } = req.body;
  
  if( !email || !password ){
    return res.status(404).json({error: "Please fill in all fields"});
  }
  if(!validator.isEmail(email)){
    return res.status(404).json({error: "Please enter a valid email"});
  }
  try {
    const user = await pool.query("SELECT * FROM profiles WHERE email = $1", [email]);
    if(user.rows.length === 0){
      return res.status(404).json({error: "User does not exist"});
    }
    const passwordMatch = await bcryptjs.compare(password, user.rows[0].password);
    if(!passwordMatch){
      return res.status(404).json({error: "Incorrect password, please try again"});
    }
    const token = signToken(user.rows[0].id);
    res.status(201).json({user: email, token});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Colud not log you in, please try again later"})
  }
}

//signup personal
const signupUserPersonal = async(req, res)=> {
  const { email, password } = req.body;
  const id = uuidv7();
  const full_name = "New User";
  const username = email ? email.split("@")[0]: null;
  
  if( !email || !password ){
    return res.status(404).json({error: "Please fill in all fields"});
  }
  if(!validator.isEmail(email)){
    return res.status(404).json({error: "Please enter a valid email"});
  }
  if(!validator.isStrongPassword(password)){
    return res.status(404).json({error: "Password must be at least 8 characters and include a mix of letters, numbers, and special characters"});
  }
  
  try {
    const userExists = await pool.query(`SELECT * FROM profiles WHERE email = $1`, [email]);
    if(userExists.rows.length > 0){
      return res.status(409).json({error: "An account with this email already exists"});
    }
    const salt = await bcryptjs.genSalt(10);
    const passwordHash = await bcryptjs.hash(password, salt);
    const user = await pool.query(`INSERT INTO profiles(id, account_type, full_name, username, email, password) VALUES($1, $2, $3, $4, $5, $6)`, [id, "personal", full_name, username, email, passwordHash]);
    const token = signToken(id);
    res.status(201).json({user: email, token});
  } catch (error) {
    res.status(500).json({error: "Could not create account, please try again later"});
  }
}

//signup organization
const signupUserOrganization = async(req, res)=> {
  const { name, companyEmail, website, industry, country, password } = req.body;
  const userId = uuidv7();
  const description = `A company in ${country}`;
  
  //form validation
  if(!name || !companyEmail || !website || !industry || !country || !password){
    return res.status(404).json({error: "Please fill in all fields"});
  }
  if(!validator.isEmail(companyEmail)){
    return res.status(404).json({error: "Please enter a valid email"});
  }
  if(industry === "none"){
    return res.status(404).json({error: "Please select industry, choose other if not listed"});
  }
  if(country === "none"){
    return res.status(404).json({error: "Please select country, choose other if not listed"});
  }
  if(!validator.isStrongPassword(password)){
    return res.status(404).json({error: "Please enter a strong password"});
  }
  
  try {
    //check for user if exists
    const userExists = await pool.query(`SELECT * FROM profiles WHERE email = $1`, [companyEmail]);
    if(userExists.rows.length > 0){
      return res.status(409).json({error: "An account with this email already exists"});
    }
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const passwordHash = await bcryptjs.hash(password, salt);
    //create company
    const companyResult = await pool.query(
      `INSERT INTO companies (id, name, description, website_url, industry, country)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,[userId, name, description, website, industry, country]);
      //Grab the id from company
      const companyId = companyResult.rows[0].id;
      //then create user, reference companyId on company_id
    const user = await pool.query(`INSERT INTO profiles(id, account_type, full_name, email, company_id, password) VALUES($1, $2, $3, $4, $5, $6)`, [userId, "organization", name, companyEmail, companyId, passwordHash]);
    const token = signToken(userId);
    res.status(201).json({user: companyEmail, name, token});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Could not create account, please try again later"});
  }
}


module.exports = { loginUser, signupUserPersonal, signupUserOrganization }
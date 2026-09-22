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
  
}

//signup personal
const signupUserPersonal = async(req, res)=> {
  const id = uuidv7();
  const { email, password } = req.body;
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
      res.status(404).json({error: "User already exists"});
    }
    const salt = await bcryptjs.genSalt(10);
    const passwordHash = await bcryptjs.hash(password, salt);
    const user = await pool.query(`INSERT INTO profiles(id, type, full_name, username, email, password) VALUES($1, $2, $3, $4, $5, $6)`, [id, "personal", full_name, username, email, passwordHash]);
    const token = signToken(user.rows[0].id);
    res.status(201).json({user: email, token})
  } catch (error) {
    console.log(error);
    res.status(404).json({error: "Could not create account, please try again later"});
  }
}

//signup organization
const signupUserOrganization = async(req, res)=> {
  const { name, companyEmail, website, industry, country, password } = req.body;
  console.log(country, industry, password);
  
  if(!name || !companyEmail || !website || !industry || !country || !password){
    return res.status(404).json({error: "Please fill in all fields"});
  }
  if(!validator.isEmail(companyEmail)){
    return res.status(404).json({error: "Please enter a valid email"});
  }
  if(!validator.isStrongPassword(password)){
    return res.status(404).json({error: "Please enter a strong password"});
  }
  
}


module.exports = { loginUser, signupUserPersonal, signupUserOrganization }
const jwt = require("jsonwebtoken");
const validator = require("validator");
const pool = require("../data/pg");

//get opportunities
const getCompanies = async (req, res)=> {
  
}

//get opportunity
const getCompany = async (req, res)=> {
  const company_id = req.company_id;
  
  try {
    const opportunities = await pool.query("SELECT o.id, o.title, o.summary, o.description, o.type, o.work_mode, o.closing_date, c.name as company_name, c.description as company_description, c.logo_url, c.website_url, c.industry, c.province as company_province, c.country as company_country, c.city as company_city, c.created_at, l.city, l.province, l.country FROM opportunities o JOIN companies c ON o.company_id = c.id LEFT JOIN locations l ON o.location_id = l.id WHERE o.company_id = $1 ORDER BY o.created_at DESC", [company_id]);
    res.status(201).json({opportunities: opportunities.rows});
    console.log(opportunities.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Could not fetch company, please try again later"});
  }
}

//create opportunity
const createCompany = async (req, res)=> {
  
}

//update opportunity
const updateCompany = async (req, res)=> {
  const company_id = req.company_id;
  const { logo, name, industry, description, website, country, location } = req.body;
  
  console.log(logo, name, industry, description, website, country, location);
  
  try {
    
  } catch (error) {
    res.status(500).json({error: "Failed to update company profile, please try again later"});
  }
} 

//delete opportunity
const deleteCompany = async (req, res)=> {
  
}




module.exports = {
  getCompanies, getCompany, createCompany, updateCompany, deleteCompany
}
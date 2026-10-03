const jwt = require("jsonwebtoken");
const validator = require("validator");
const pool = require("../data/pg");
const { uuidv7 } = require("uuidv7");

//get opportunities
const getOpportunities = async (req, res)=> {
  const { type, mode } = req.query;
  const typeArray = type?.split(",");
  
  try {
    const opportunities = typeArray ? await pool.query("SELECT o.id, o.title, o.type, o.work_mode, o.closing_date, o.saves, o.views, o.slug, c.name, c.logo_url, l.city, l.province, l.country FROM opportunities o JOIN companies c ON o.company_id = c.id LEFT JOIN locations l ON o.location_id = l.id WHERE o.type = ANY($1::opportunity_type[]) ORDER BY o.created_at DESC", [typeArray])
  : await pool.query("SELECT o.id, o.title, o.type, o.work_mode, o.closing_date, o.saves, o.views, o.slug, c.name, c.logo_url, l.city, l.province, l.country FROM opportunities o JOIN companies c ON o.company_id = c.id LEFT JOIN locations l ON o.location_id = l.id ORDER BY o.created_at DESC");
    res.status(201).json({opportunities: opportunities.rows});
  } catch (error) {
    console.log(error)
    res.status(500).json({error: "Could not fetch opportunities, try again later"});
  }
}

//get featured opportunities
const getOpportunitiesFeatured = async (req, res)=> {
  try {
    const opportunities = await pool.query("SELECT o.id, o.title, o.type, o.work_mode, o.closing_date, o.saves, o.views, o.slug, c.name, c.logo_url, l.city, l.province, l.country FROM opportunities o JOIN companies c ON o.company_id = c.id LEFT JOIN locations l ON o.location_id = l.id WHERE o.is_featured = true ORDER BY o.created_at DESC");
    res.status(201).json({opportunities: opportunities.rows});
  } catch (error) {
    res.status(500).json({error: "Could not fetch opportunities, try again later"});
  }
}

//get opportunity
const getOpportunity = async (req, res)=> {
  const { id } = req.params;
  try {
    const opportunity = await pool.query("SELECT o.title, o.type, o.work_mode, o.closing_date, o.saves, o.views, o.slug, o.description, o.application_url, c.name, c.logo_url, c.website_url, c.description AS company_description, c.industry, c.city AS company_city, c.country AS company_country, l.city, l.province, l.country FROM opportunities o JOIN companies c ON o.company_id = c.id LEFT JOIN locations l ON o.location_id = l.id WHERE o.id = $1", [id]);
    res.status(201).json({opportunity: opportunity.rows[0]});
  } catch (error) {
    res.status(500).json({error: "Could not fetch opportunity, try again later"});
  }
}

//create oppprtunity from validation
const createOpportunityValidation = async (res, title, type, summary, description, location, mode, industry, skills, qualifications, deadline, positions, website)=> {
  
  if(!title){
    return res.status(404).json({error: "Title is required"});
  }
  if(type === "none"){
    return res.status(404).json({error: 'Please select the type of opportunity, choose "other" if not listed'});
  }
  if(!summary){
    return res.status(404).json({error: "Please include a summary of the opportunity. A summary is a brief description"});
  }
  if(!description){
    return res.status(404).json({error: "Please include a detailed description of the opportunity (e.g. role, responsibilities)"});
  }
  if(location === "none"){
    return res.status(404).json({error: 'Please select the location where this opportunity is. choose "other" if not listed'});
  }
  if(mode === "none"){
    return res.status(404).json({error: "Please select work mode"});
  }
  if(industry === "none"){
    return res.status(404).json({error: 'Please select industry, choose "other" if not listed'});
  }
  if(!website){
    return res.status(404).json({error: 'Please include the website url of this application. This is where candidates can send their applications'});
  }
  if(!deadline){
    return res.status(404).json({error: 'Please include the closing date for this oppprtunity'});
  }
}

//create opportunity
const createOpportunity = async (req, res)=> {
  const { title, type, summary, description, location, mode, industry, skills, qualifications, deadline, positions, website } = req.body;
  
  const id = uuidv7();
  const company_id = req.company_id;
  
  const location_id = location.split(",")[0];
  const city = location.split(",")[1];
  const province = location.split(",")[2];
  
  await createOpportunityValidation(res, title, type, summary, description, location, mode, industry, skills, qualifications, deadline, positions, website);
  
  try {
    const opportunity = await pool.query(`INSERT INTO opportunities
    (id, title, type, summary, description, work_mode, industry, positions, closing_date, company_id, location_id, application_url)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [id, title, type, summary, description, mode, industry, positions, deadline, company_id, location_id, website]);
    res.status(201).json({opportunity: opportunity.rows[0]});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Could not create opportunity, try again later"});
  }
}

//update opportunity
const updateOpportunity = async (req, res)=> {
  
}

//delete opportunity
const deleteOpportunity = async (req, res)=> {
  
}


module.exports = {
  getOpportunities, getOpportunitiesFeatured, getOpportunity, createOpportunity, updateOpportunity, deleteOpportunity
}
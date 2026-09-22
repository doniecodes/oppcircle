const jwt = require("jsonwebtoken");
const validator = require("validator");
const pool = require("../data/pg");

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
    res.status(404).json({error: "Could not fetch opportunities, try again later"});
  }
}

//get featured opportunities
const getOpportunitiesFeatured = async (req, res)=> {
  try {
    const opportunities = await pool.query("SELECT o.id, o.title, o.type, o.work_mode, o.closing_date, o.saves, o.views, o.slug, c.name, c.logo_url, l.city, l.province, l.country FROM opportunities o JOIN companies c ON o.company_id = c.id LEFT JOIN locations l ON o.location_id = l.id WHERE o.is_featured = true ORDER BY o.created_at DESC");
    res.status(201).json({opportunities: opportunities.rows});
  } catch (error) {
    res.status(404).json({error: "Could not fetch opportunities, try again later"});
  }
}

//get opportunity
const getOpportunity = async (req, res)=> {
  const { id } = req.params;
  try {
    const opportunity = await pool.query("SELECT o.title, o.type, o.work_mode, o.closing_date, o.saves, o.views, o.slug, o.description, o.application_url, c.name, c.logo_url, c.website_url, c.description AS company_description, c.industry, c.city AS company_city, c.country AS company_country, l.city, l.province, l.country FROM opportunities o JOIN companies c ON o.company_id = c.id LEFT JOIN locations l ON o.location_id = l.id WHERE o.id = $1", [id]);
    res.status(201).json({opportunity: opportunity.rows[0]});
  } catch (error) {
    res.status(404).json({error: "Could not fetch opportunity, try again later"});
  }
}

//create opportunity
const createOpportunity = async (req, res)=> {
  
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
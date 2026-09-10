require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PUBLIC_HOST,
  user: process.env.PUBLIC_USER, 
  port: process.env.PUBLIC_PORT,
  database: process.env.PUBLIC_DATABASE,
  password: process.env.PUBLIC_PASSWORD,
  ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;
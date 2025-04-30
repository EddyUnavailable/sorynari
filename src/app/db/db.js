require('dotenv').config(); // Load environment variables from .env
const { Pool } = require('pg');

// Create a new pool using the environment variables
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Export the pool to use in other parts of the app
module.exports = pool;
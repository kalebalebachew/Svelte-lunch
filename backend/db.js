
const { Pool } = require('pg');

const pool = new Pool({
  user: 'kaleb',
  host: 'localhost',
  database: 'Svelte-lunch',
  password: 'kaleb@1234',
  port: 5432, 
});

module.exports = pool;

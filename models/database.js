const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config();

// Default path to SQLite database
const DB_PATH = process.env.DB_NAME || path.join(__dirname, '../../data/restaking.db');

let db;
try {
  db = new Database(DB_PATH);
  console.log(`✅ Connected to SQLite DB at ${DB_PATH}`);
} catch (err) {
  console.error('❌ Failed to connect to SQLite DB:', err.message);
}

module.exports = db;

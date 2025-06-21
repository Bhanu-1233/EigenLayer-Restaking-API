const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const DB_PATH = process.env.DB_NAME || "./database.db";

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error("❌ Failed to connect to SQLite DB:", err.message);
  } else {
    console.log(`✅ Connected to SQLite DB at ${DB_PATH}`);
  }
});

module.exports = db;

const db = require("./database");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS restakers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      address TEXT,
      amount TEXT,
      validator TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS validators (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      operator_id TEXT,
      address TEXT,
      total_stake TEXT,
      status TEXT,
      slash_history TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS rewards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT,
      total_rewards TEXT,
      breakdown TEXT
    );
  `);

  console.log("✅ SQLite tables initialized.");
});

module.exports = db;

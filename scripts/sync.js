// scripts/sync.js
const Database = require('better-sqlite3');
const { fetchRestakers } = require('../services/fetchRestakers');

const db = new Database('./database.db');

async function sync() {
  try {
    const restakers = await fetchRestakers();
    console.log(`📦 Fetched ${restakers.length} restakers from subgraph.`);

    const stmt = db.prepare(
      'INSERT OR IGNORE INTO restakers (address, amount, validator) VALUES (?, ?, ?)'
    );

    const insertMany = db.transaction((restakers) => {
      for (const r of restakers) {
        stmt.run(r.address, r.amount?.toString() ?? '0', r.validator ?? '');
      }
    });

    insertMany(restakers);
    console.log('✅ Restakers synced to database.');
  } catch (err) {
    console.error('❌ Sync failed:', err.message);
  } finally {
    db.close();
  }
}

sync();

// scripts/sync.js
const sqlite3 = require("sqlite3").verbose();
const { fetchRestakers } = require("../services/fetchRestakers");

const db = new sqlite3.Database("./database.db");

async function sync() {
  try {
    const restakers = await fetchRestakers();

    if (!restakers || restakers.length === 0) {
      console.log("⚠️ No restakers fetched.");
      return;
    }

    const stmt = db.prepare("INSERT OR IGNORE INTO restakers (address, amount, validator) VALUES (?, ?, ?)");

    restakers.forEach((r) => {
      stmt.run([r.address, r.amount, r.validator], (err) => {
        if (err) {
          console.error(`❌ Failed to insert restaker ${r.address}:`, err.message);
        }
      });
    });

    stmt.finalize(() => {
      console.log(`✅ Synced ${restakers.length} restakers to the database.`);
      db.close();
    });

  } catch (err) {
    console.error("❌ Sync failed:", err.message);
    db.close();
  }
}

sync();

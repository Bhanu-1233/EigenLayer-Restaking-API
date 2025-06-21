const db = require("./database");

module.exports = {
  // Get all restakers
  getAllRestakers: (callback) => {
    db.all("SELECT * FROM restakers", [], callback);
  },

  // Add a restaker
  addRestaker: ({ address, amount, validator }, callback) => {
    db.run(
      "INSERT INTO restakers (address, amount, validator) VALUES (?, ?, ?)",
      [address, amount, validator],
      callback
    );
  },

  // Get all validators
  getAllValidators: (callback) => {
    db.all("SELECT * FROM validators", [], callback);
  },

  // Add a validator
  addValidator: ({ operator_id, address, total_stake, status, slash_history }, callback) => {
    db.run(
      "INSERT INTO validators (operator_id, address, total_stake, status, slash_history) VALUES (?, ?, ?, ?, ?)",
      [operator_id, address, total_stake, status, JSON.stringify(slash_history)],
      callback
    );
  },

  // Get reward for a specific user
  getRewardByUser: (user, callback) => {
    db.get("SELECT * FROM rewards WHERE user = ?", [user], callback);
  },

  // Add reward info
  addReward: ({ user, total_rewards, breakdown }, callback) => {
    db.run(
      "INSERT INTO rewards (user, total_rewards, breakdown) VALUES (?, ?, ?)",
      [user, total_rewards, JSON.stringify(breakdown)],
      callback
    );
  }
};

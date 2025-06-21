const db = require('./database');

module.exports = {
  // Get all restakers
  getAllRestakers: () => {
    const stmt = db.prepare("SELECT * FROM restakers");
    return stmt.all(); // returns an array of rows
  },

  // Add a restaker
  addRestaker: ({ address, amount, validator }) => {
    const stmt = db.prepare(
      "INSERT INTO restakers (address, amount, validator) VALUES (?, ?, ?)"
    );
    return stmt.run(address, amount, validator); // returns info about insertion
  },

  // Get all validators
  getAllValidators: () => {
    const stmt = db.prepare("SELECT * FROM validators");
    return stmt.all();
  },

  // Add a validator
  addValidator: ({ operator_id, address, total_stake, status, slash_history }) => {
    const stmt = db.prepare(
      "INSERT INTO validators (operator_id, address, total_stake, status, slash_history) VALUES (?, ?, ?, ?, ?)"
    );
    return stmt.run(operator_id, address, total_stake, status, JSON.stringify(slash_history));
  },

  // Get reward for a specific user
  getRewardByUser: (user) => {
    const stmt = db.prepare("SELECT * FROM rewards WHERE user = ?");
    return stmt.get(user); // returns one object or undefined
  },

  // Add reward info
  addReward: ({ user, total_rewards, breakdown }) => {
    const stmt = db.prepare(
      "INSERT INTO rewards (user, total_rewards, breakdown) VALUES (?, ?, ?)"
    );
    return stmt.run(user, total_rewards, JSON.stringify(breakdown));
  },
};

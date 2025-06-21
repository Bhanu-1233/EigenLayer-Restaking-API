// services/fetchValidators.js
async function fetchValidators() {
  return [
    {
      operator_id: "op1",
      address: "0xValidator1",
      total_stake: "500 ETH",
      status: "active",
      slash_history: [
        { amount: "0.5", reason: "Downtime", timestamp: "2024-11-10" }
      ]
    },
    {
      operator_id: "op2",
      address: "0xValidator2",
      total_stake: "320 ETH",
      status: "slashed",
      slash_history: [
        { amount: "1.0", reason: "Double-signing", timestamp: "2025-02-22" }
      ]
    }
  ];
}

module.exports = { fetchValidators };

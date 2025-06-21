// services/fetchRewards.js
async function fetchRewardsForAddress(address) {
  return {
    user: address,
    total_rewards: "3.75 ETH",
    breakdown: [
      { validator: "0xValidator1", amount: "2.0" },
      { validator: "0xValidator2", amount: "1.75" }
    ],
    timestamps: [
      "2024-11-01T00:00:00Z",
      "2025-01-15T00:00:00Z"
    ]
  };
}

module.exports = { fetchRewardsForAddress };

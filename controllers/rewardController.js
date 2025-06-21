// controllers/rewardController.js
const { fetchRewardsForAddress } = require("../services/fetchRewards");

exports.getByAddress = async (req, res) => {
  try {
    const { address } = req.params;
    const rewards = await fetchRewardsForAddress(address);
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

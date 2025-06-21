const { fetchValidators } = require("../services/fetchValidators");

exports.getAll = async (req, res) => {
  try {
    const validators = await fetchValidators();
    res.json(validators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const queries = require("../models/queries");

exports.getAll = (req, res) => {
  try {
    const rows = queries.getAllRestakers(); // synchronous
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.add = (req, res) => {
  try {
    const data = req.body;
    const insertedId = queries.addRestaker(data); // synchronous
    res.json({ insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

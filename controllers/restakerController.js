const queries = require("../models/queries");

exports.getAll = (req, res) => {
  queries.getAllRestakers((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.add = (req, res) => {
  const data = req.body;
  queries.addRestaker(data, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ insertedId: this.lastID });
  });
};

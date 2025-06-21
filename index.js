require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/restakers", require("./routes/restakers"));
app.use("/validators", require("./routes/validators"));
app.use("/rewards", require("./routes/rewards"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const connectDB = require("./components/db");
const router = require("./components/router");

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", router);

// Connect DB + start server
connectDB();
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});

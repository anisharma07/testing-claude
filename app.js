const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from the API!",
    timestamp: new Date().toISOString(),
    status: "Server is running smoothly",
    version: "1.0.0",
  });
});

// Serve the landing page at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

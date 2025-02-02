require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
const path = require("path");
const Section = require("./src/models/Section"); // Correct model import

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Route to fetch all sections
app.get("/api/sections", async (req, res) => {
  try {
    
    const portfolio = await Section.find();
    
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio not found'
      });
    }

    res.json({
      success: true,
      data: portfolio
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "./build")));


// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

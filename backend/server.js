const express = require('express');
const cors = require('cors');
const path = require('path');
const { portfolioData } = require('./data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Route
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Serve Static Frontend Files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all middleware to serve the React app for any unmatched routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
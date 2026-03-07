const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { portfolioData } = require('./data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/healthz', (req, res) => {
  res.status(200).json({ ok: true });
});

// API Route
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

const frontendDistPath = path.join(__dirname, '../frontend/dist');
const frontendIndexPath = path.join(frontendDistPath, 'index.html');

if (fs.existsSync(frontendIndexPath)) {
  // Serve built frontend files when available.
  app.use(express.static(frontendDistPath));

  // Serve the React app for non-API routes.
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    return res.sendFile(frontendIndexPath);
  });
} else {
  console.warn('frontend/dist not found. Serving API only.');
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

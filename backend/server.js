const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { portfolioData } = require('./data');
require('dotenv').config();

const app = express();
// Render uses PORT 10000 by default, fallback to 5000 for local dev
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check route
app.get('/healthz', (req, res) => {
  res.status(200).json({ ok: true });
});

// API Route
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Resolve absolute paths for the frontend
const frontendDistPath = path.resolve(__dirname, '..', 'frontend', 'dist');
const frontendIndexPath = path.resolve(frontendDistPath, 'index.html');

console.log(`Server environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`Current Working Directory: ${process.cwd()}`);
console.log(`Looking for frontend at: ${frontendIndexPath}`);

if (fs.existsSync(frontendIndexPath)) {
  console.log('Frontend built files found. Serving static files.');
  
  // Serve static files from the dist folder
  app.use(express.static(frontendDistPath));

  // Catch-all middleware for SPA (React Router) - Works for Express 5
  app.use((req, res, next) => {
    // If it's an API route that somehow reached here, pass it through
    if (req.path.startsWith('/api/')) {
      return next();
    }
    
    // Send index.html for all other routes
    res.sendFile(frontendIndexPath, (err) => {
      if (err) {
        console.error(`Error sending index.html: ${err.message}`);
        // Only send response if headers haven't been sent yet
        if (!res.headersSent) {
          res.status(500).send('Failed to load frontend. Please check build logs.');
        }
      }
    });
  });
} else {
  console.warn(`WARNING: Frontend built files NOT found at ${frontendIndexPath}`);
  console.warn('The application will only serve API routes.');
  
  // Provide a helpful response for the root path if frontend is missing
  app.get('/', (req, res) => {
    res.json({
      message: "API is running, but frontend was not found. Please check your build process.",
      path: frontendIndexPath,
      exists: fs.existsSync(frontendIndexPath)
    });
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

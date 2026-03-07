const express = require('express');
const cors = require('cors');
const { portfolioData } = require('./data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
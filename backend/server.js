const express = require('express');
const cors = require('cors');
const portfolioData = require('./data/portfolio');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/portfolio/:section', (req, res) => {
  const section = req.params.section;
  if (portfolioData[section]) {
    res.json(portfolioData[section]);
  } else {
    res.status(404).json({ error: 'Section not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
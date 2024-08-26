const express = require('express');
const bodyParser = require('body-parser');
const oneboxRoutes = require('./routes/oneboxRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/onebox', authMiddleware, oneboxRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;

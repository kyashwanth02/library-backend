const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');
const User = require('./models/user');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Library Book Collection API is running");
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // creates tables if not exist
  })
  .then(() => console.log('Models synced with database...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);


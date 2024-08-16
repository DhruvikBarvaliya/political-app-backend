const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB();

app.use(express.json());

app.use('/api', userRoutes);

app.get('/', (req, res) => res.send('API Running'));

module.exports = app;

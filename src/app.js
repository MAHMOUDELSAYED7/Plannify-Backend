const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth_routes');
const todoRoutes = require('./routes/todo_routes');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/todo', todoRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
/*
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const memoryRoutes = require('./routes/memories');

app.use('/api/auth', authRoutes);
app.use('/api/memories', memoryRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));*/

// server.js
/*const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Load routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));*/

/*
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const memoryRoutes = require('./routes/memories'); // ✅ Import memories.js

app.use('/api/auth', authRoutes);
app.use('/api/memories', memoryRoutes); // ✅ Mount at /api/memories

// Optional health check route
app.get('/', (req, res) => {
    res.send('✅ API is live');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});*/


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const memoryRoutes = require('./routes/memories');

// Mount routes
app.use('/api/auth', authRoutes); // For /signup and /login
app.use('/api/memories', memoryRoutes); // Protected memory routes

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
/*const express = require('express');
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

// 🔧 Test route to verify backend is live
app.get('/', (req, res) => {
    res.send('✅ API is working');
});

// Mount routes
app.use('/api/auth', authRoutes); // For /signup and /login
app.use('/api/memories', memoryRoutes); // Protected memory routes

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
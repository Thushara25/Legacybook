// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const memoryRoutes = require('./routes/memories');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS middleware (adjust origin for production later)
app.use(cors({
    origin: 'http://localhost:3000', // allow requests from your React frontend
    credentials: true // allow cookies/auth headers if needed
}));

// ✅ Middleware for parsing JSON
app.use(express.json());

// ✅ Health check route
app.get('/', (req, res) => {
    res.send('✅ API is working');
});

// ✅ API routes
app.use('/api/auth', authRoutes);
app.use('/api/memories', memoryRoutes);

// ✅ Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
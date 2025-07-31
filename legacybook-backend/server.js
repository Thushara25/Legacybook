// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const memoryRoutes = require('./routes/memories');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Define allowed origins (adjust as needed)
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://legacybook.vercel.app', // <-- your deployed frontend if needed
];

// ✅ CORS middleware (dynamically allow only trusted origins)
app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // If using cookies or headers with auth
}));

// ✅ Parse incoming JSON requests
app.use(express.json());

// ✅ Health check route
app.get('/', (req, res) => {
    res.send('✅ API is working');
});

// ✅ API routes
app.use('/api/auth', authRoutes);
app.use('/api/memories', memoryRoutes);

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
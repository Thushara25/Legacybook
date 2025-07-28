/*const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Load environment variables
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

// Dummy user store
const users = [
    { email: "test@example.com", password: "password123" }
];

// Signup route
router.post('/signup', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    users.push({ email, password });
    res.json({ message: "✅ Signup successful!", user: { email } });
});

// Login route with JWT
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({
        message: "✅ Login successful!",
        token,
        user: { email }
    });
});

module.exports = router;*/
/*
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../db');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

// ✅ Signup (Store in DB)
router.post('/signup', async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
    }

    try {
        const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existing.rows.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]
        );

        res.json({ message: "✅ Signup successful!", user: { email } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Login (Authenticate from DB)
router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: "✅ Login successful!",
            token,
            user: { email: user.email }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;*/




/*const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

// 🧠 Hardcoded user credentials
const hardcodedUser = {
    username: 'admin',
    password: 'secret123', // use a strong one in production
};

// 🔐 Login route
router.post('/login', (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ error: 'Password required' });
    }

    if (password !== hardcodedUser.password) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ username: hardcodedUser.username }, JWT_SECRET, {
        expiresIn: '1h',
    });

    res.json({
        message: '✅ Login successful!',
        token,
        user: { username: hardcodedUser.username },
    });
});

module.exports = router;*/
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../db');
require('dotenv').config();

const router = express.Router();

// 🔐 Signup (optional for now)
router.post('/signup', async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: 'Username and password required' });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashedPassword]
        );
        res.status(201).json({ message: 'User created', user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔐 Login
router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: 'Username and password required' });

    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (result.rows.length === 0)
            return res.status(401).json({ error: 'Invalid credentials' });

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
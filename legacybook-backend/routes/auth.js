const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../db');
require('dotenv').config();

const router = express.Router();

// ✅ Signup Route
router.post('/signup', async(req, res) => {
    let { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    username = username.trim();
    password = password.trim();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username', [username, hashedPassword]
        );

        const user = result.rows[0];
        const token = jwt.sign({ id: user.id, username: user.username },
            process.env.JWT_SECRET, { expiresIn: '1h' }
        );

        res.status(201).json({ message: 'User created', token });
    } catch (err) {
        console.error('❌ Signup error:', err);
        if (err.code === '23505') {
            return res.status(400).json({ error: 'Username already exists' });
        }
        res.status(500).json({ error: 'Server error during signup' });
    }
});

// ✅ Login Route
router.post('/login', async(req, res) => {
    let { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username },
            process.env.JWT_SECRET, { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (err) {
        console.error('❌ Login error:', err);
        res.status(500).json({ error: 'Server error during login' });
    }
});

module.exports = router;
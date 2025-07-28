/*
const express = require('express');
const router = express.Router();
const pool = require('../db');
const authenticateToken = require('../middlewares/authenticateToken');

// ✅ Create a memory (Protected)
router.post('/', authenticateToken, async(req, res) => {
    const { title, description, image_url } = req.body;
    const userEmail = req.user.email;

    try {
        // Fetch user ID from email
        const userResult = await pool.query('SELECT id FROM users WHERE email = $1', [userEmail]);
        if (userResult.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userId = userResult.rows[0].id;

        // Insert memory
        const result = await pool.query(
            'INSERT INTO memories (user_id, title, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *', [userId, title, description, image_url]
        );

        res.json({ message: '✅ Memory created successfully', memory: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get all memories (Protected)
router.get('/', authenticateToken, async(req, res) => {
    const userEmail = req.user.email;

    try {
        // Fetch user ID from email
        const userResult = await pool.query('SELECT id FROM users WHERE email = $1', [userEmail]);
        if (userResult.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userId = userResult.rows[0].id;

        // Fetch memories
        const result = await pool.query(
            'SELECT * FROM memories WHERE user_id = $1 ORDER BY created_at DESC', [userId]
        );

        res.json({ memories: result.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;*/


const express = require('express');
const router = express.Router();
const pool = require('../db');
const authenticateToken = require('../middleware/authenticateToken');

// ✅ Create a memory (Protected)
router.post('/', authenticateToken, async(req, res) => {
    const { title, description, image_url } = req.body;
    const userId = req.user.id;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO memories (user_id, title, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *', [userId, title, description, image_url || null]
        );

        res.json({ message: '✅ Memory created successfully', memory: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get all memories (Protected)
router.get('/', authenticateToken, async(req, res) => {
    const userId = req.user.id;

    try {
        const result = await pool.query(
            'SELECT * FROM memories WHERE user_id = $1 ORDER BY created_at DESC', [userId]
        );

        res.json({ memories: result.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
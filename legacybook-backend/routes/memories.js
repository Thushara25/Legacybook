/*const express = require('express');
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

module.exports = router;*/
/*
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
        console.error('🔥 Error creating memory:', err); // Helpful server log
        res.status(500).json({ error: err.message || 'Something went wrong' });
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
        console.error('🔥 Error fetching memories:', err);
        res.status(500).json({ error: err.message || 'Something went wrong' });
    }
});

module.exports = router;*/

// routes/memories.js
/*const express = require('express');
const pool = require('../db');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// ✅ POST /api/memories
router.post('/memories', authenticateToken, async(req, res) => {
    const { title, description, date, emoji, imageUrl } = req.body;
    const userId = req.user.id;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const image_url = imageUrl || null;

    console.log('📥 Received memory:', {
        userId,
        title,
        description,
        date,
        emoji,
        image_url,
    });

    try {
        const result = await pool.query(
            `
      INSERT INTO memories (user_id, title, description, date, emoji, image_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `, [userId, title, description, date, emoji, image_url]
        );

        const saved = result.rows[0];

        console.log('✅ Saved memory to DB:', saved);

        res.status(201).json({
            memory: {
                id: saved.id,
                title: saved.title,
                description: saved.description,
                date: saved.date,
                emoji: saved.emoji,
                imageUrl: saved.image_url, // camelCase for frontend
                created_at: saved.created_at,
            },
        });
    } catch (err) {
        console.error('❌ Error saving memory:', err.message);
        res.status(500).json({ error: 'Failed to save memory' });
    }
});


module.exports = router;*/

// routes/memories.js
const express = require('express');
const pool = require('../db');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// ✅ POST /api/memories — create a new memory
router.post('/', authenticateToken, async(req, res) => {
    // Destructure values sent from frontend (camelCase)
    const { title, description, date, emoji, imageUrl } = req.body;

    // Convert camelCase to snake_case to match DB columns
    const image_url = imageUrl || null;

    const userId = req.user.id;

    console.log('📥 Received memory:', {
        title,
        description,
        date,
        emoji,
        image_url,
        userId,
    });

    try {
        const result = await pool.query(
            `INSERT INTO memories (user_id, title, description, date, emoji, image_url)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`, [userId, title, description, date, emoji, image_url]
        );

        const saved = result.rows[0];

        console.log('✅ Saved to DB:', saved);

        res.status(201).json({
            memory: {
                id: saved.id,
                user_id: saved.user_id,
                title: saved.title,
                description: saved.description,
                date: saved.date,
                emoji: saved.emoji,
                image_url: saved.image_url,
                created_at: saved.created_at,
            },
        });
    } catch (err) {
        console.error('❌ Error inserting memory:', err.message);
        res.status(500).json({ error: 'Failed to save memory' });
    }
});



// ✅ FIXED: Remove extra `/api/memories`
router.delete('/:id', authenticateToken, async(req, res) => {
    const userId = req.user.id;
    const memoryId = req.params.id;
    console.log('🔥 DELETE route reached');


    try {
        const check = await pool.query(
            'SELECT * FROM memories WHERE id = $1 AND user_id = $2', [memoryId, userId]
        );

        if (check.rows.length === 0) {
            return res.status(404).json({ error: 'Memory not found or unauthorized' });
        }

        await pool.query('DELETE FROM memories WHERE id = $1', [memoryId]);
        res.status(200).json({ message: 'Memory deleted' });
    } catch (err) {
        console.error('❌ Error deleting memory:', err.message);
        res.status(500).json({ error: 'Failed to delete memory' });
    }
});



module.exports = router;
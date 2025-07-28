const pool = require('../db');

const createMemory = async(req, res) => {
    const { title, description } = req.body;
    const userId = req.user.id;

    try {
        const result = await pool.query(
            'INSERT INTO memories (user_id, title, description) VALUES ($1, $2, $3) RETURNING *', [userId, title, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMemories = async(req, res) => {
    const userId = req.user.id;

    try {
        const result = await pool.query(
            'SELECT * FROM memories WHERE user_id = $1 ORDER BY created_at DESC', [userId]
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createMemory, getMemories };
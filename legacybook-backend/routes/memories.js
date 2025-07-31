// routes/memories.js
const express = require("express");
const router = express.Router();
const pool = require("../db");
const authenticateToken = require("../middleware/authenticateToken");

// POST /api/memories
router.post("/", authenticateToken, async(req, res) => {
    const { title, description, imageUrl } = req.body;

    const userId = req.user.id; // user ID from JWT

    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }

    try {
        const result = await pool.query(
            `INSERT INTO memories (user_id, title, description, image_url)
   VALUES ($1, $2, $3, $4)
   RETURNING *`, [userId, title, description, imageUrl]
        );


        res.status(201).json({ memory: result.rows[0] });
    } catch (err) {
        console.error("❌ Error inserting memory:", err.message);
        res.status(500).json({ error: "Failed to save memory" });
    }
});
// GET /api/memories
router.get("/", authenticateToken, async(req, res) => {
    try {
        const userId = req.user.id;

        if (!userId) {
            console.error("❌ No user ID found in request");
            return res.status(401).json({ error: "Unauthorized: User ID missing" });
        }

        const result = await pool.query(
            "SELECT id, title, description, image_url FROM memories WHERE user_id = $1 ORDER BY id DESC", [userId]
        );

        res.status(200).json({ memories: result.rows });
    } catch (err) {
        console.error("❌ Error fetching memories from DB:", {
            message: err.message,
            stack: err.stack,
            dbError: err,
        });
        res.status(500).json({ error: "Failed to fetch memories", details: err.message });
    }
});


module.exports = router;
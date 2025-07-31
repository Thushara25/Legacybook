/*const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. Token missing.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('❌ Token verification error:', err);
            return res.status(403).json({ error: 'Invalid or expired token' });
        }

        req.user = user; // user.id is needed in /memories
        next();
    });
}

module.exports = authenticateToken;*/

/*const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Extract Bearer token

    if (!token) {
        return res.status(403).json({ error: "Access denied. Token missing." }); // ⛔ Block if no token
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error("❌ Token verification error:", err);
            return res.status(403).json({ error: "Invalid or expired token" }); // ⛔ Block if invalid
        }

        req.user = user; // ✅ Inject user into request
        next(); // ✅ Proceed
    });
};

module.exports = authenticateToken; */

/*const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log('🛡️ Auth Header:', authHeader); // <-- Add this

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        console.log('❌ No token provided');
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('❌ Token verification failed:', err.message);
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}
module.exports = authenticateToken;*/

const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Expect "Bearer <token>"

    if (!token) {
        console.log('❌ No token provided');
        return res.status(401).json({ error: 'Access denied. Token missing.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('❌ Token verification failed:', err.message);
            return res.status(403).json({ error: 'Invalid or expired token' });
        }

        if (!user.id) {
            console.log('❌ Token decoded, but user ID missing');
            return res.status(403).json({ error: 'Token does not contain valid user ID' });
        }

        console.log('✅ Token verified for user ID:', user.id);
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
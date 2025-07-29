const jwt = require('jsonwebtoken');
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

module.exports = authenticateToken;
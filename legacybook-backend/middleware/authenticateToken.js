const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Expect "Bearer <token>"

    if (!token) {
        console.log("❌ No token provided");
        return res.status(401).json({ error: "Access denied. Token missing." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("❌ Token verification failed:", err.message);
            return res.status(403).json({ error: "Invalid or expired token" });
        }

        if (!user || !user.id) {
            console.log("❌ Token decoded but user ID missing:", user);
            return res.status(403).json({ error: "Token is valid but missing user ID" });
        }

        console.log("✅ Token verified for user ID:", user.id);
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
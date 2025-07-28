const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './backend.env' });

const memoryRoutes = require('./routes/memoryRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/memories', memoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
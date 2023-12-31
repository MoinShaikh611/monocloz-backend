const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./mongoConnection');

// Routes
const productsRoutes = require('./routes/products');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require("./routes/orderRoutes")
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT;


// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes)

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

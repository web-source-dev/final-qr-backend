const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

require('dotenv').config();
const path = require('path');

// Initialize app
const app = express();

app.use(bodyParser.json())
// Middleware
app.use(express.json());  // Parse incoming JSON requests
const frontendURL = 'https://final-qr-update.vercel.app/';

// CORS configuration
const corsOptions = {
  origin: frontendURL, // Allow your frontend to access the backend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allow all desired HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow cookies or credentials if needed
};

// Use CORS middleware with the options
app.use(cors(corsOptions));

// MongoDB Connection using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });
    console.log('MongoDB connected with Mongoose...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

// Connect to DB
connectDB();

// Routes
const userRoutes = require('./Routes/userroute');
app.use('/api', userRoutes);

app.get('/',(req, res) => {
  res.send('Welcome to the QR Code API!');
})
// Set up port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

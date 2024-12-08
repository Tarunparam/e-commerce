import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

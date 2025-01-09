const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(cors({
  origin: 'https://leader-k5h8.vercel.app', // replace with your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials if needed
}));
app.use(express.json());
const playerRoutes = require('./routes/playerRoutes');
app.use('/api/players', playerRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
const PORT = process.env.MONGO_URI || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

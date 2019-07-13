const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Bodyparser middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/api/url'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

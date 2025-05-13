const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/categories', require('./routes/categories'));

app.listen(5000, () => console.log('Server started on port 5000'));



const express = require('express');

const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
require('./dbConnection/dbConnection');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const eventRoute = require('./routes/events');
const categoryRoute = require('./routes/categories');
const uploadRoute = require('./routes/upload');

dotenv.config();
// so as to make req/resp use json
app.use(express.json());
app.use(cors());

// route
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/events', eventRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/images', express.static(path.join(__dirname, '/images')));
app.listen(4000);
if (process.env.API_PORT) {
  // app.listen(process.env.API_PORT);
}

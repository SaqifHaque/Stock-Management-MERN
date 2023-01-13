const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

const dbConnect = require('./db/dbconnect');

const userRoute = require('./routes/userRoute');

const errorHandler = require('./middleware/errorMiddleware');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Error Middleware
app.use(errorHandler);

// Routes Middleware

app.user('/api/users', userRoute);

const port = process.env.PORT;

dbConnect();


app.listen(port, () => { console.log(`Server is running on ${port}`) });
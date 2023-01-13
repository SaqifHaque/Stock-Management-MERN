const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

const dbConnect = require('./db/dbconnect');

const app = express();

const port = process.env.PORT;

dbConnect();


app.listen(port, () => { console.log(`Server is running on ${port}`) });
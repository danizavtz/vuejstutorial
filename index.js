const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
/* load dotenv */
require('dotenv').config()


const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./server/server'));

module.exports = app;
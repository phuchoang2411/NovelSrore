const express = require('express');
const mongoose = require('mongoose');

const { homeRouter } = require('./routes');

const app = express();

app.use(express.json());

//routes
app.use('/', homeRouter);

module.exports = app;

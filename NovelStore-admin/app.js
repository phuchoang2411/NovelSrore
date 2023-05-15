const express = require('express');
const mongoose = require('mongoose');

const { databaseUtil } = require('./utils');
const { bookRouter } = require('./routes');

const app = express();

databaseUtil.connectDatabase();

app.use(express.json());

//routes
app.use('/book', bookRouter);

module.exports = app;

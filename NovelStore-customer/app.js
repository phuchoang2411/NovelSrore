const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const appLocals = require('./app.locals');

const { homeRouter, booksRouter } = require('./routes');
const { databaseUtil } = require('./utils');

const app = express();
app.locals = appLocals;

databaseUtil.connectDatabase();

app.use(express.json());

//routes
app.use('/', homeRouter);
app.use('/books', booksRouter);

module.exports = app;

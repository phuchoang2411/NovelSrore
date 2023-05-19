const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const appLocals = require('./app.locals');

const { homeRouter, booksRouter } = require('./routes');
const { databaseUtil } = require('./utils');

const app = express();
app.locals = appLocals;

databaseUtil.connectDatabase();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
//app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.use('/', homeRouter);
app.use('/books', booksRouter);

module.exports = app;

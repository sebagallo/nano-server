const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const adsController = require('./routes/AdsController.js');
const helpers = require('./db/helpers');

const app = express();

helpers.dbInit();

app.enable('trust proxy');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(helpers.expressLogger);
app.use('/', adsController);
app.use(helpers.expressErrorLogger);

module.exports = app;

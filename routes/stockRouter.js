const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Stocks = require('../models/stocks');

const stockRouter = express.Router();

stockRouter.use(bodyParser.json());


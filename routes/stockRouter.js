const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Stocks = require('../Models/stocks');

const stockRouter = express.Router();

stockRouter.use(bodyParser.json());

stockRouter.route('/')
.get((req, res, next) => {

    Stocks.find({})
    .then((stocks) =>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(stocks);
    }, (err)=> next(err))
    .catch((err)=> next(err));
})
.post( (req, res, next) => {
    Stocks.create(req.body).
    then( (stock) => {
        console.log('Stock created ', stock);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(stock);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put( (req, res, next) => {
    res.statusCode=403;
res.send('PUT operation not supported on Stocks' );
})
.delete((req, res, next) => {
    Stocks.remove({})
    .then((resp) => {
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = stockRouter;
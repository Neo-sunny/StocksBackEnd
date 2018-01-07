import { Stream } from 'stream';
import { Double } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/bson';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const stockSchema = new Schema({

    date:{
        type:Date
    },
    symbol:{
        type: String
    },
    open:{
        type:Double
    },
    close:{
        type:Double
    },
    low:{
        type: Double
    },
    high:{
        type: Double
    },
    vloume:{
        type: Double
    }

},{
    timestamps: true
})

var Stocks = mongoose.model('Stock',stockSchema);

module.exports = Stocks;

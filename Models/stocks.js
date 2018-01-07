const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;


const stockSchema = new Schema({

    date:{
        type:Date
    },
    symbol:{
        type: String
    },
    open:{
        type: SchemaTypes.Double
    },
    close:{
        type: SchemaTypes.Double
    },
    low:{
        type: SchemaTypes.Double
    },
    high:{
        type: SchemaTypes.Double
    },
    vloume:{
        type: SchemaTypes.Double
    }

},{
    timestamps: true
})

var Stocks = mongoose.model('Stock',stockSchema);

module.exports = Stocks;

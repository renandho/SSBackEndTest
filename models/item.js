// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var itemSchema = new mongoose.Schema({
    item_name: String,
    item_year: Number,
    picture: String,
    buy_price: Number,
    sell_price: Number,
    size: String,
    category: {
    	category_name: String,
    	supplier: String,
    	buyer: String
    }
});

// Return model
module.exports = restful.model('Items', itemSchema);

const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    menu: [
        {
            name: String,
            description: String,
            price: Number
        }
    ]
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
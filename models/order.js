const mongoose = require("mongoose");

// Create a schema for the order
const orderSchema = new mongoose.Schema({
    customerName: String,
    shippingAddress: String,
});

// Create a model based on the order schema
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

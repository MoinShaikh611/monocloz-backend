const Order = require("../models/order")
exports.createOrder = async (req, res) => {
    try {
        const orderData = req.body;

        // Create a new instance of the Order model
        const order = new Order(orderData);

        // Save the order to the database
        await order.save();

        // Respond with a success message or other appropriate response
        res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
        // Handle errors and respond with an error message
        console.error(error);
        res.status(500).json({ error: "An error occurred while placing the order" });
    }
}


exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        // Respond with the list of orders
        res.status(200).json({ orders });
    } catch (error) {
        // Handle errors and respond with an error message
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching orders" });
    }
};

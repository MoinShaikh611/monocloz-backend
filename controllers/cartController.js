const Cart = require('../models/cart');

// Add item to cart
const addItemToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const { userId } = req;

        const existingCartItem = await Cart.findOne({ user: userId, product: productId });

        if (existingCartItem) {
            // If the cart item exists, update the quantity
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            return res.status(200).json(existingCartItem);
        }

        // Create a new cart item
        const cartItem = new Cart({ user: userId, product: productId, quantity });

        // Save the cart item to the database
        const savedCartItem = await cartItem.save();

        res.status(201).json(savedCartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addItemToCart };

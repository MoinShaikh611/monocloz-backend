const Product = require('../models/products')
// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
            .select('name price').lean();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(500).json({ message: 'Failed to retrieve products.' });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).lean();
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error retrieving product:', error);
        res.status(500).json({ message: 'Failed to retrieve product.' });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, shortProductDesc, size, price, accordion } = req.body;
    try {
        const newProduct = new Product({ name, shortProductDesc, size, price, accordion });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Failed to create product.' });
    }
};


// Update a product by ID
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Failed to update product.' });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndRemove(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.status(200).json({ message: 'Product deleted successfully.' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Failed to delete product.' });
    }
};

const mongoose = require('mongoose')

const accordionSectionSchema = new mongoose.Schema({
    description: {
        type: [String],
        required: true
    }
});


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shortProductDesc: {
        type: String,
        require: true
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    accordion: {
        sizeFit: [accordionSectionSchema],
        deliveryReturn: [accordionSectionSchema],
        productInformation: [accordionSectionSchema]
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

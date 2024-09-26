const mongoose = require('mongoose');

const fertilizerSchema = new mongoose.Schema({
    fertilizerName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

const tomatoSchema = new mongoose.Schema({
    TomatoName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

const Fertilizer = mongoose.model('Fertilizer', fertilizerSchema);
const Tomato = mongoose.model('Tomato', tomatoSchema);

module.exports = {
    Fertilizer,
    Tomato
};

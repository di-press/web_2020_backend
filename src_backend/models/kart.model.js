const mongoose = require('mongoose');
const { Schema } = mongoose;

const kartProductSchema = new Schema({ 
    ref: String,
    quantity: Number
});

const Kart = mongoose.model('Kart', kartProductSchema);
module.exports = Kart;
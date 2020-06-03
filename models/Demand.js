const mongoose = require('mongoose');
const { Schema } = mongoose;

const demandSchema = new Schema({
    project: String,
    counter: { type: Number, default: 1 }
});

mongoose.model('demand', demandSchema);
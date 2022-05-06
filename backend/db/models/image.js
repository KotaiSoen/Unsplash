const mongoose = require('../mongoose');

const ImageSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;


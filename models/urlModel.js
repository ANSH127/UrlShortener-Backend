const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Url = mongoose.model('url', urlSchema);

module.exports = Url;

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
        default: Date.now,
        expires:72*60*60 // 72 hours
    }

});

const Url = mongoose.model('url', urlSchema);

module.exports = Url;

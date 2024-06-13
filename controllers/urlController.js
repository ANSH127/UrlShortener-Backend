const randomstring = require("randomstring");
const Url = require('../models/urlModel');

const createURL = async (req, res) => {
    const url = req.body.url;
    console.log(url);

    const urlExists = await Url.findOne({ originalURL: url });
    if (urlExists) {
        return res.json({ url: urlExists.shortURL });
    }
    else {
        const shortURL = randomstring.generate(7);
        const newURL = new Url({
            originalURL: url,
            shortURL: shortURL
        });
        await newURL.save();
        res.json({ url: shortURL });

    }
}

const getURL = async (req, res) => {
    const shortUrl = req.params.id;

    const url = await Url.findOne({ shortURL: shortUrl });
    if (url === null) {
        return res.sendStatus(404);
    }
    res.redirect(url.originalURL);


}

module.exports = {
    createURL,
    getURL
}
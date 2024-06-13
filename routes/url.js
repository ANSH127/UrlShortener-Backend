
const express = require('express');
const router = express.Router();

const Urlcontroller = require('../controllers/urlController');


router.post('/createURL', Urlcontroller.createURL);

router.get('/getURL/:id',Urlcontroller.getURL);

module.exports = router;
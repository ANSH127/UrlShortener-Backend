require('dotenv').config();
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const urlRoutes = require('./routes/url');
const mongoose = require('mongoose');

app.use(cors({ 
    origin: ['http://localhost:3000','https://shrnk.vercel.app'],

 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    fs.readFile('public/index.html', 'utf8', (err, data) => {
        if (err) {
            res.send('Error');
        } else {
            res.send(data);
        }
    });
});


app.use('/api', urlRoutes);



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });


app.listen(process.env.PORT||4000, () => {
    console.log('Server is running on port 4000');
});
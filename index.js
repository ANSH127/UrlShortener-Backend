const express=require('express');
const fs=require('fs');
const app=express();
const randomstring = require("randomstring");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.get('/',(req,res)=>{
    fs.readFile('public/index.html','utf8',(err,data)=>{
        if(err){
            res.send('Error');
        }else{
            res.send(data);
        }
    });
});

app.get('/:id',(req,res)=>{
    const id=req.params.id;

    if(id=="v9Fix97"){
        res.redirect('https://www.google.com');
    }
    else{
        res.send('Invalid URL');
    }
});

app.post('/submit',(req,res)=>{

    const url=req.body.url;


    console.log(url);
    res.send(randomstring.generate(7));
});

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});
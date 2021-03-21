//const http = require('http');
//import http from 'http';

const { text } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/add",(req,res,next)=> {
    console.log(req.body);

    res.send(req.body.name)
})

app.listen(port);





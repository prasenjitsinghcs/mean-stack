var express = require('express');
var app = express();

app.get('*', (req, res)=>{
    res.send('Welcome to What is MEAN stack - Prasenjit Singh & Priyanka Test for Code Pipline');
});

app.listen(3000);

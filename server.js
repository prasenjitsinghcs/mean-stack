var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('*', (req, res)=>{
    res.render('pages/index');
});

app.listen(3000);

var express = require('express');
var app = express();
var port = 3000;

//routes
app.get('/', function (req, res) {
    res.send('It works!');
});

//configuration
app.listen(port, function () {
    console.log('Application started on ' + port);
});

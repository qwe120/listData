var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname)));

var data = require('./data/data');
app.get('/', function (req, res, next) {
    res.sendFile(require('path').join(process.cwd(),'views', 'index.html'));
});

app.post('/data/data', function (req, res, next) {
    console.log(data);
    // res.render('index', {
    //     data:data
    // });
    res.end(JSON.stringify(data));
});

var ser = app.listen('8080', function () {
    console.log('port is:' + ser.address().port);
});
var express = require('express');
var app = express();
var path = require('path')

app.use('/', express.static(path.join(__dirname, 'template')))

app.listen(1000, _ => console.log('listening'))

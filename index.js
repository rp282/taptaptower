const express = require('express');
const app = express();
const path = require('path')
const port = 3000

app.use(express.static(__dirname))

app.listen(port, _ => console.log('listening'))

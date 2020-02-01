const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app set('port', (process.env.PORT || 5000));

app.listen(port, _ => console.log('listening'));

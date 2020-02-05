const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./model')
//const fetch = require('node-fetch');

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('./login.html');
});

const port = process.env.PORT || 3000;

/*
app.get('/', (req, res) => {
  res.redirect(path.join(req, '/home.html'));
});
*/

app.post('/login-with-facebook', (req, res) => {
  const { accessToken, userID } = req.body;

});

app.listen(port, () => {
    const d = new Date().getTime();
    console.log(`${new Date(d).toString()} App is running on port ${ port }`);
});

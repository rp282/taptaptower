const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.redirect(path.join(req, '/home'));
});

app.listen(port, () => {
    const d = new Date().getTime();
    console.log(`${new Date(d).toString()} App is running on port ${ port }`);
});

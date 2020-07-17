var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.use(express.json());

app.get('/', function(req, res, next) {
  return res.status(200).json({ message: 'Welcome to Express API template' });
});

app.listen(3000);

console.log("Created server running on http://localhost:3000");

// create web server
// start web server by running: node comments.js
// view at: http://localhost:3000/comments
// to stop server: Ctrl + C

// import the express module
var express = require('express');

// create a new express app
var app = express();

// set up the view engine
app.set('view engine', 'ejs');

// use the express static middleware
app.use(express.static('./public'));

// create a route for the home page
app.get('/', function(req, res) {
    res.render('home');
});

// create a route for the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// create a route for the comments page
app.get('/contact', function(req, res) {
    res.render('contact');
});

// start the web server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
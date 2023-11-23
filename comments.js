// create web server
var express = require('express');
var router = express.Router();

// create database connection
var db = require('../db');

// create routes
// GET all comments
router.get('/', function(req, res, next) {
  db('comments').select('*').then(function(comments) {
    res.json(comments);
  });
});

// GET comment by id
router.get('/:id', function(req, res, next) {
  db('comments').select('*').where({ id: req.params.id }).then(function(comments) {
    res.json(comments);
  });
});

// POST new comment
router.post('/', function(req, res, next) {
  db('comments').insert(req.body).then(function() {
    res.json({ success: true });
  });
});

// PUT update comment by id
router.put('/:id', function(req, res, next) {
  db('comments').update(req.body).where({ id: req.params.id }).then(function() {
    res.json({ success: true });
  });
});

// DELETE comment by id
router.delete('/:id', function(req, res, next) {
  db('comments').del().where({ id: req.params.id }).then(function() {
    res.json({ success: true });
  });
});

module.exports = router;
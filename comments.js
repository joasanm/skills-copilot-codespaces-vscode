// Create web server
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');
var Post = require('../models/Post.js');

// Create comment
router.post('/', function(req, res, next) {
    Comment.create(req.body, function (err, post) {
        if (err) return next(err);
        Post.findByIdAndUpdate(
            req.body.post,
            {$push: {"comments": post._id}},
            {safe: true, upsert: true, new : true},
            function(err, model) {
                if(err){
                    console.log(err);
                    return res.send(err);
                }
                return res.json(model);
            }
        );
    });
});

// Get all comments
router.get('/', function(req, res, next) {
    Comment.find(function (err, comments) {
        if (err) return next(err);
        res.json(comments);
    });
});

// Get comment by id
router.get('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function (err, comment) {
        if (err) return next(err);
        res.json(comment);
    });
});

// Edit comment by id
router.put('/:id', function(req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body, function (err, comment) {
        if (err) return next(err);
        res.json(comment);
    });
});

// Delete comment by id
router.delete('/:id', function(req, res, next) {
    Comment.findByIdAndRemove(req.params.id, req.body, function (err, comment) {
        if (err) return next(err);
        res.json(comment);
    });
});

module.exports = router;
const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');

//Index
breads.get('/', (req, res) => {
    res.render('index', 
    {
        breads: Bread
        title: 'Index Page'
    }
    ); 
});

module.exports = breads;

//Show
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex]);
});


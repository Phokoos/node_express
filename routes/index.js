// const express = require('express');
import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* POST login */
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    res.render('response', { title: 'Simple express app', email, password });
});


export default router;

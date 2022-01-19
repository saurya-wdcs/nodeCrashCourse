const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const app = express();

app.set('view engine', ejs);

app.listen(3000);

app.get('/', (req, res) =>{

    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about', (req, res) => {

    res.sendFile('./views/index.html', { root: __dirname});
})

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
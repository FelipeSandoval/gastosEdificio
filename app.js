require('./config/config');
const express = require('express'),
    app = express(),
    db = require('./db'),
    logger = require('morgan'),
    passport = require('passport');


app.use(logger('dev'));

app.use( (req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

const ProfileController = require('./controllers/ProfileController');
app.use('/api/profile', ProfileController);

const UserController = require('./controllers/UserController');
app.use('/api/users', UserController);



module.exports = app;
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Profile = require('../models/Profile');

//Create new Profile

router.post('/', (req, res, next) => {
    const { description } = req.body;
    Profile.create({
        description: description
    }).then(profile => res.status(201).json({
        data: profile,
        message: `nuevo perfil ${description}`
    })).catch(error => res.json({
        error: true,
        data: [],
        error: `${error}`
    }));
});

module.exports = router;
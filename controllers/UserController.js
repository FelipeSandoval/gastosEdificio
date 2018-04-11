var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('../models/User');


//Create new user

router.post('/', (req, res, next) => {
    const { nombre, apellido, correo, rut, telefono, ndepto, pass } = req.body;
    return User.create({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        rut: rut,
        telefono: telefono,
        ndepto: ndepto,
        pass: pass
    }).then(user => res.status(201).json({
        data: user,
        message: 'new User created'
    })).catch(error => res.json({
        error: true,
        data: [],
        error: `${error}`
    }));
});

module.exports = router;
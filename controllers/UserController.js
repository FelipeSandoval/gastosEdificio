var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('../models/User');


//Create new user

router.post('/', (req, res, next) => {
    const { nombre, apellido, correo, rut, telefono, pass } = req.body;
    User.create({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        rut: rut,
        telefono: telefono,
        pass: pass
    }).then(user => res.status(201).json({
        data: user,
        message: `nuevo Usuario ${nombre} creado`
    })).catch(error => res.json({
        error: true,
        data: [],
        error: `${error}`
    }));
});

router.get('/', (req, res, next) => {
    User.findAll({})
        .then( users => res.json({
            data: users
        }))
        .catch(error => res.json({
            error: true,
            data:[],
            error: error 
        }));
});

module.exports = router;
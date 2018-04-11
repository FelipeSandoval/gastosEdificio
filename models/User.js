const db = require('../db');
const Sequilize = require('sequelize');
const User = db.define('usuario', {
    nombre: { type: Sequilize.STRING },
    apellido: { type: Sequilize.STRING },
    correo: { type: Sequilize.TEXT },
    rut: { type: Sequilize.NUMERIC },
    telefono: { type: Sequilize.NUMERIC },
    ndepto: { type: Sequilize.NUMERIC },
    pass: { type: Sequilize.TEXT }
});

User.sync({force:true});
module.exports = User;
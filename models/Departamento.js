const db = require('../db');
const Departamento = db.sequelize.define('departamento', {
    ndepto: { type: db.Sequilize.NUMERIC }
});

Departamento.sync({ force: true });
module.exports = Departamento;
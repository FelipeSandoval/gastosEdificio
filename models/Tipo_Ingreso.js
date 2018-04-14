const db = require('../db');
const TipoIngreso = db.sequelize.define('tipo_ingreso', {
    description: { type: db.Sequilize.TEXT }
});

TipoIngreso.sync({ force: true });
module.exports = TipoIngreso;
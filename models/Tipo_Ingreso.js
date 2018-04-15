const db = require('../db');
const TipoIngreso = db.sequelize.define('tipo_ingreso', {
    id_tipo_ingreso: {   type: db.Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    description: { type: db.Sequilize.TEXT }
});

TipoIngreso.sync({ force: true });
module.exports = TipoIngreso;
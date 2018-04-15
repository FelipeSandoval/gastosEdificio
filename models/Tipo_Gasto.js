const db = require('../db');
const TipoGasto = db.sequelize.define('tipo_gasto', {
    id_tipo_gasto: {   type: db.Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    description: { type: db.Sequilize.TEXT }
});

TipoGasto.sync({ force: true });
module.exports = TipoGasto;
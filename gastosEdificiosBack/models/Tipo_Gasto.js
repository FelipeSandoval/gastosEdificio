const db = require('../db');
const TipoGasto = db.sequelize.define('tipo_gasto', {
    description: { type: db.Sequilize.TEXT }
});

TipoGasto.sync({ force: true });
module.exports = TipoGasto;
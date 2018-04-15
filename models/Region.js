const db = require('../db');
const Region = db.sequelize.define('region', {
    id_region: {   type: db.Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    nombre: { type: db.Sequilize.STRING }
});

Region.sync({ force: true });
module.exports = Region;
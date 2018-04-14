const db = require('../db');
const Region = db.sequelize.define('region', {
    nombre: { type: db.Sequilize.STRING }
});

Region.sync({ force: true });
module.exports = Region;
const db = require('../db');
const Comuna = db.sequelize.define('comuna', {
    id: {   type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
    nombre: { type: db.Sequilize.STRING }
});

Comuna.sync({ force: true });
module.exports = Comuna;
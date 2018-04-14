const db = require('../db');
const Edificio = db.sequelize.define('edificio', {
    nombre: { type: db.Sequilize.STRING },
    direccion: { type: db.Sequilize.STRING }
});

Edificio.sync({force:true});
module.exports = Edificio;
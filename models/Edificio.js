const db = require('../db');
const Edificio = db.sequelize.define('edificio', {
    id_edificio: {   type: db.Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    nombre: { type: db.Sequilize.STRING },
    direccion: { type: db.Sequilize.STRING }
});
User.associate = (models) => {
    this.Comuna = this.belongsToMany(models.Comuna, { through: 'id_comuna' });
};

Edificio.sync({force:true});
module.exports = Edificio;

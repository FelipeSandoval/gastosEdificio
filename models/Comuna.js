const db = require('../db');
const Comuna = db.sequelize.define('comuna', {
    id_comuna: {   type: db.sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
    nombre: { type: db.Sequilize.STRING }
});
Comuna.associate = (models) => {
    this.Region = this.belongsToMany(models.Region, { through: 'id_region' });
};
Comuna.sync({ force: true });
module.exports = Comuna;
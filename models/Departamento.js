const db = require('../db');
const Departamento = db.sequelize.define('departamento', {
    ndepto: { type: db.Sequilize.NUMERIC,
                    primaryKey: true },
    piso: { type: db.Sequilize.NUMERIC}
});
User.associate = (models) => {
    this.Edificio = this.belongsToMany(models.Edificio, { through: 'id_edificio' });
};


Departamento.sync({ force: true });
module.exports = Departamento;
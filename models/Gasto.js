const db = require('../db');
const Gasto = db.sequelize.define('gasto', {
    id_gasto: {   type: db.Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    descripcion:{type: db.Sequilize.STRING},
    saldo: { type: db.Sequilize.NUMERIC },
    fecha: { type: db.Sequilize.DATE }
});

Gasto.associate = (models) => {
    this.Cuenta = this.belongsToMany(models.Cuenta, { through: 'id_cuenta' });
};

Gasto.associate = (models) => {
    this.TipoGasto = this.belongsToMany(models.TipoGasto, { through: 'id_tipo_gasto' });
};

Gasto.sync({ force: true });
module.exports = Gasto;
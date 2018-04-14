const db = require('../db');
const Ingreso = db.sequelize.define('ingreso', {
    monto: { type: db.Sequilize.NUMERIC },
    fecha: { type: db.Sequilize.DATE },
});

Ingreso.associate = (models) => {
    this.Cuenta = this.belongsToMany(models.Cuenta, { through: 'id_cuenta' });
};

Ingreso.associate = (models) => {
    this.TipoCuenta = this.belongsToMany(models.TipoCuenta, { through: 'id_tipo_ingreso' });
};

Ingreso.sync({ force: true });
module.exports = Ingreso;
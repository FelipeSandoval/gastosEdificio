const db = require('../db');
const Cuenta = db.sequelize.define('cuenta', {
    total: { type: db.Sequilize.NUMERIC },
    fecha: { type: db.Sequilize.NUMERIC },
    abono: { type: db.Sequilize.NUMERIC },
    pago: { type: db.Sequilize.BOOLEAN },

});

Cuenta.associate = (models) => {
    this.Cuenta = this.belongsToMany(models.Cuenta, { through: 'ndepto' });
};

Cuenta.sync({ force: true });
module.exports = Cuenta;
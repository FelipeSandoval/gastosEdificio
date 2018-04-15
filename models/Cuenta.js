const db = require('../db');
const Cuenta = db.sequelize.define('cuenta', {
    id_cuenta: {   type: db.Sequelize.INTEGER, 
                  autoIncrement: true,
                  primaryKey: true
    },
    total: { type: db.Sequilize.NUMERIC },
    fecha: { type: db.Sequilize.NUMERIC },
    abono: { type: db.Sequilize.NUMERIC },
    pago: { type: db.Sequilize.BOOLEAN },

});

Cuenta.associate = (models) => {
    this.Departamento = this.belongsToMany(models.Departamento, { through: 'ndepto' });
};

Cuenta.sync({ force: true });
module.exports = Cuenta;
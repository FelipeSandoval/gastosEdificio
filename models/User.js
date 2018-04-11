const db = require('../db');
const User = db.sequelize.define('usuario', {
    nombre: { type: db.Sequilize.STRING },
    apellido: { type: db.Sequilize.STRING },
    correo: { type: db.Sequilize.TEXT },
    rut: { type: db.Sequilize.NUMERIC },
    telefono: { type: db.Sequilize.NUMERIC },
    ndepto: { type: db.Sequilize.NUMERIC },
    pass: { type: db.Sequilize.TEXT }
});

User.associate = (models) => {
    this.Profile = this.belongsToMany(models.Profile, { through: 'perfilUsuario' });
};

User.sync({force:true});
module.exports = User;
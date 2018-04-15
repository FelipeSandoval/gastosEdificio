//Admin, conserje, arredatario y dueño
const db = require('../db');
const Profile = db.sequelize.define('perfil', {
    id_perfil: {   type: db.Sequilize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    description: { type: db.Sequilize.STRING },
});

Profile.sync({force: true});
module.exports = Profile;


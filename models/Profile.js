//Admin, conserje, arredatario y dueño
const db = require('../db');
const Profile = db.sequelize.define('perfil', {
    description: { type: db.Sequilize.STRING },
});

Profile.sync({force: true});
module.exports = Profile;


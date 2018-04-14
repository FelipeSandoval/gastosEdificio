const Sequilize = require('sequelize');
const sequelize = new Sequilize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    operatorsAliases: false,
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = { sequelize: sequelize, Sequilize: Sequilize };
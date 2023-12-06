const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_links', 'root', 'Ameghino282*', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = sequelize;
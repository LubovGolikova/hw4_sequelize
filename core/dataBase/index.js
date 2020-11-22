const {Sequelize} = require('sequelize');

module.exports.sequelize = new Sequelize('products',
    'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql'
    })

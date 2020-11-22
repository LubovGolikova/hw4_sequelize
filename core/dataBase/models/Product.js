const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../index');

class ProductModal extends Model {
}

ProductModal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {sequelize})

module.exports = ProductModal;


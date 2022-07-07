'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Currency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Currency.belongsTo(models.User, {
        foreignKey: "user_id"
      })
    }
  }
  Currency.init({
    source_currency: DataTypes.STRING,
    destination_currency: DataTypes.STRING,
    tax: DataTypes.STRING,
    input_value: DataTypes.NUMBER,
    output_value: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Currency',
  });
  return Currency;
};
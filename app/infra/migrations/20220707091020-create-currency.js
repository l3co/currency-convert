'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Currencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source_currency: {
        type: Sequelize.STRING
      },
      destination_currency: {
        type: Sequelize.STRING
      },
      tax: {
        type: Sequelize.STRING
      },
      input_value: {
        type: Sequelize.DECIMAL
      },
      output_value: {
        type: Sequelize.DECIMAL
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Currencies');
  }
};
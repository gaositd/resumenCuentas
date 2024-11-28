const Sequelize = require('sequelize');

const sequelize = new Sequelize();

const UserHeader = sequelize.define('userHeader', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Nombre(s)'
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Apellidos'
  }
});

module.exports = UserHeader;
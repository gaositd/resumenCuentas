const Sequelize = require('sequelize');

const sequelize = new Sequelize();

const UserPosition = sequelize.define('userPosition', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Cargo'
  },
  fullAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Dirección completa'
  },
  cellPhone: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Teléfono celular'
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Teléfono fijo'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Correo electrónico'
  },
  password: {
    type: Sequelize.INTEGER,
    allowNull: false,
    Comment: 'Posición al registro'
  },
  type: {
    type: Sequelize.ENUM('ADMIN', 'READER', 'MANAGER'),
    allowNull: false,
    Comment: 'Tipo de usuario'
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    Comment: 'Estado del usuario'
  },
  entryDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    Comment: 'Fecha de ingreso'
  },
  RegisteredBy: {
    type: Sequelize.STRING,
    allowNull: false,
    Comment: 'Id del usuario que registró al usuario'
  }
});

module.exports = UserPosition;
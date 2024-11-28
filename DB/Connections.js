const Sequelize = require('sequelize');
require('dotenv').config();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

sequelize.authenticate()
  .then(() => {"OK"})
  .catch(
    (error) => {
      console.error('Unable to connect to the database:', error);
      process.exit(1);//averiguar que significa esta linea
    }
  );
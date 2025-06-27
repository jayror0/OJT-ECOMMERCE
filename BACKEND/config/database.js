// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('boy1xevynofarhujhmsd', 'ukjo3un504ppia0gu1dc', 'MD9jzmWRY6rc6q25qfsg9Ue1wNwRb8', {
  host: 'localhost', 
  dialect: 'postgres',
  logging: false, 
});

module.exports = sequelize;
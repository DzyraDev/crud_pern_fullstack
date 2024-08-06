const { Sequelize } = require('sequelize');


// const sequilize = new Sequelize(
//   "postgres://default:AfqaHL5zQ4iS@ep-fragrant-unit-a4gqplt4-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require"
// );

const sequilize = new Sequelize("crud-latihan", "postgres", "aris", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequilize


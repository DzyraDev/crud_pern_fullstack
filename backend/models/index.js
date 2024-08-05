const sequelize = require('../config/database');
const Sequelize = require("sequelize");
const Item = require('./item')


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Item = Item;

module.exports = db;
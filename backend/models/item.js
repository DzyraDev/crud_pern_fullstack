const { Sequelize, DataTypes, STRING } = require('sequelize')
const sequelize = require("../config/database")


const Item = sequelize.define("Item", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  harga: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
    timesstamps: false,
});

module.exports = Item;
const { Sequelize } = require('sequelize');


const sequilize = new Sequelize('postgresql://postgres:dBazZKWSqhAXvfxnPNKwprzjhCwCTAxT@monorail.proxy.rlwy.net:10362/railway', {
  host: "localhost",
  dialect: "postgres",
});


module.exports = sequilize

// const sequilize = new Sequelize("postgcrud-latihan", "res", "aris", {
//   host: "localhost",
//   dialect: "postgres",
// });

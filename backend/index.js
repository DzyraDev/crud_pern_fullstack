const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", itemRoutes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});

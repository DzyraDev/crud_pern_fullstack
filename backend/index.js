const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "https://crud-pern-client.vercel.app"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", itemRoutes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});

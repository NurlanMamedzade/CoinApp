const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const connection = require("./db");

const coinsRouter = require("./routes/coinsRouter");

app.use("/", coinsRouter);

app.listen(4025, () => {
  console.log("Port ishleyir");
});

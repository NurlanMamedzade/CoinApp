const express = require("express");
const Route = express.Router();
const {
  getCoins,
  createCoins,
  updateCoins,
  deleteCoins,
  getCoinsbyId,
} = require("../controllers/coinsController");

Route.get("/", getCoins);
Route.get("/:id", getCoinsbyId);
Route.post("/", createCoins);
Route.put("/update/:id", updateCoins);
Route.delete("/delete/:id", deleteCoins);

module.exports = Route;

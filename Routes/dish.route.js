const express = require("express");
const { AddDish, GetDish } = require("../Controller/dish.controller");

const dishRouter = express.Router();

dishRouter.post("/dishadd", AddDish);
dishRouter.get("/", GetDish);

module.exports = { dishRouter };

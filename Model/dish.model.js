const mongoose = require("mongoose");
const dishesSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    price: String,
  },
  {
    versionKey: false,
  }
);

const DishModel = mongoose.model("dish", dishesSchema);
module.exports = { DishModel };

const { DishModel } = require("../Model/dish.model");

const AddDish = async (req, res) => {
  try {
    const dish = new DishModel(req.body);
    await dish.save();
    res.status(201).send({ message: "Dish saved" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const GetDish = async (req, res) => {
  try {
    const dishes = await DishModel.find({});
    res.status(200).send(dishes);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { AddDish,GetDish };

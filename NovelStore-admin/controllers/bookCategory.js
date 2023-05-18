const { BookCategoryModel } = require('../models');

const getAllCategory = async (req, res) => {
  try {
    const categories = await BookCategoryModel.find();
    res.send({ categories });
  } catch (error) {
    console.log(error.message);
  }
};

const addCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const newCategory = await new BookCategoryModel({
      name: data.name,
    });
    await newCategory.save();
    res.status(201).send(newCategory);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await BookCategoryModel.findByIdAndDelete(id);
    if (!category) res.status(404).send('Category is not found');
    else res.redirect(301, '/book/category');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addCategory,
  getAllCategory,
  deleteCategory,
};

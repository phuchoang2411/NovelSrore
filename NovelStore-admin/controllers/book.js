const { BookModel, BookCategoryModel, UserModel } = require('../models');

const getAllBook = async (req, res) => {
  try {
    const categories = await BookCategoryModel.find();
    const owners = await UserModel.find({ role: 'ADMIN' });
    const books = await BookModel.find()
      .populate('categoryId')
      .populate('ownerId')
      .exec();
    // res.render('product/list', {
    //   products,
    //   categories,
    //   owners
    // })
    res.send({
      books,
      categories,
      owners,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addBook = async (req, res, next) => {
  try {
    const data = req.body;
    const newBook = await new BookModel({
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
      ownerId: data.ownerId,
    });
    await newBook.save();
    res.redirect(301, '/book');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await BookModel.findByIdAndRemove(id);
    if (!book)
      return res.status(404).send('Product with the given id not found');
    else res.redirect(301, '/book');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  const book = await BookModel.findByIdAndUpdate(
    id,
    {
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
      ownerId: data.ownerId,
    },
    { new: true }
  );
  if (!book) return res.status(404).send('Product with the given id not found');
  res.redirect(301, '/book');
};

module.exports = {
  getAllBook,
  addBook,
  deleteBook,
  updateBook,
};

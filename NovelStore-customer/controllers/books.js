const mongoose = require('mongoose');
const { BookModel, BookCategoryModel } = require('../models');
const config = require('../config');
const { commonUtil } = require('../utils');

const getBooks = async ({ page, categoryId, sort } = {}) => {
  const query = {};
  let _sort = {};

  if (categoryId) {
    query.categoryId = categoryId;
  }

  if (sort) {
    _sort = commonUtil.convertSortQueryStringToMongooseSort(sort);
  }

  const data = await BookModel.paginate(query, {
    page: page || 1,
    limit: config.PAGE_LIMIT,
    populate: {
      path: 'categoryId ownerId',
      select: '-password',
    },
    sort: _sort,
  });

  return data;
};

const index = async (req, res) => {
  const { page, categoryId, sort } = req.query;

  const [categoriesRes, BooksRes] = await Promise.all([
    BookCategoryModel.find(),
    getBooks({ page, categoryId, sort }),
  ]);

  const { docs, page: currentPage, totalPages } = BooksRes;

  // res.render('books/index', {
  //   categoryId,
  //   categories: categoriesRes,

  //   books: docs,
  //   page: currentPage,
  //   totalPages,

  //   pageUrl: req.originalUrl,
  // });

  res.send({
    categoryId,
    categories: categoriesRes,

    books: docs,
    page: currentPage,
    totalPages,

    pageUrl: req.originalUrl,
  });
};

const getBookById = async (req, res, next) => {
  const { bookId } = req.params;

  const isValid = mongoose.isValidObjectId(bookId);
  if (!isValid) {
    // return next(new Error('Mã sản phẩm không hợp lệ!'));
    return res.send('Mã sản phẩm không hợp lệ!');
  }

  const book = await BookModel.findById(bookId).exec();
  if (!book) {
    // return next(new Error('Không tìm thấy sản phẩm!'));
    return res.send('Không tìm thấy sản phẩm!');
  }

  const [relatedbooks] = await Promise.all([
    BookModel.find({ categoryId: book.categoryId }).limit(3).exec(),
    BookModel.findByIdAndUpdate(bookId, {
      $inc: { totalViews: 1 },
    }).exec(),
  ]);

  // res.render('books/view', { book, relatedbooks });
  res.send({ book, relatedbooks });
};

module.exports = {
  index,
  getBookById,
};

const express = require('express');
const router = express.Router();

const bookCategoryController = require('../controllers/bookCategory');
const bookController = require('../controllers/book');

router.get('/category', bookCategoryController.getAllCategory);
router.get('/delete-category/:id', bookCategoryController.deleteCategory);
router.post('/category', bookCategoryController.addCategory);

router.get('/', bookController.getAllBook);
router.post('/', bookController.addBook);
router.get('/delete-book/:id', bookController.deleteBook);
router.post('/update-book/:id', bookController.updateBook);

module.exports = router;

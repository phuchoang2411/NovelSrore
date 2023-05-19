const express = require('express');
const router = express.Router();

const { booksController } = require('../controllers');

router.get('/', booksController.index);
router.get('/:bookId', booksController.getBookById);

module.exports = router;

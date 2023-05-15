const express = require('express');
const router = express.Router();

const bookCategoryController = require('../controllers/bookCategory');

router.get('/category', bookCategoryController.getAllCategory);
router.post('/category', bookCategoryController.addCategory);

module.exports = router;

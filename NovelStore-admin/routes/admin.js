const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/', adminController.getAdminList);
router.post('/register', adminController.registerAdmin);

module.exports = router;

const express = require('express');
const { login, singup } = require('../controllers/authController');

const router = express.Router()

router.post('/login', login);

module.exports = router;
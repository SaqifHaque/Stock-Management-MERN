const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.router();

router.post("/register", registerUser);

module.exports = router;
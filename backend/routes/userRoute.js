const express = require('express');
const { registerUser, loginUser, logoutUser, getUser, loginStatus } = require('../controllers/userController');
const authorization = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/get-user", authorization, getUser);
router.get("/logged-in", loginStatus);

module.exports = router;
const express = require("express");
const router = express.Router();
const authorization = require('../middleware/authMiddleware');
const { createProduct } = require("../controllers/productController");


router.post("/", authorization,   createProduct);

module.exports = router;
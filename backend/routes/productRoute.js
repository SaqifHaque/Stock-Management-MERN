const express = require("express");
const router = express.Router();
const authorization = require('../middleware/authMiddleware');
const { createProduct } = require("../controllers/productController");
const { upload } = require("../utills/fileUpload");

router.post("/", authorization, upload.single("image"), createProduct);

module.exports = router;
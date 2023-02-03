const express = require("express");
const router = express.Router();
const authorization = require('../middleware/authMiddleware');
const { createProduct, getProducts, getProduct } = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");

router.post("/", authorization, upload.single("image"), createProduct);
router.get("/", authorization, getProducts);
router.get("/:id", authorization, getProduct);

module.exports = router;
const asyncHandler = require('express-async-handler');
const Product = require("../schema/productSchema");
const { fileSizeFormatter } = require('../utils/fileUpload');
const cloudinary = require('cloudinary').v2;

const createProduct = asyncHandler (async (req, res) => {
    const { name, sku, category, quantity, price, description  } = req.body;

    // Validation
    if(!name || !category || !quantity || !price || !description ) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    // Image Upload
    let fileData = {};
    if(req.file) {
        // save Image to cloudinary
        let uploadFile;
        try{
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {folder: "StockM", resource_type: "image"})
        } catch {
            res.status(500);
            throw new Error("Image could not be uploaded")
        }

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size)
        }
    }
    // Create product
    const product = await Product.create({
        user: req.user.id,
        name,
        sku,
        category,
        quantity,
        price,
        description,
        image: fileData
    })

    res.status(201).json(product);
})

module.exports = {
    createProduct,
}
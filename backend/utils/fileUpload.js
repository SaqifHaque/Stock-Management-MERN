const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.toISOString().replace(/:/g, "-") + file.originalname)
    }
  })

  function fileFilter (req, file, cb) {
    if(file.mimetype === "image/png" || "image/jpg" || "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
  
  }

  const upload = multer({storage, fileFilter});

  module.exports = {upload};
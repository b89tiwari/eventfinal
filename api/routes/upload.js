const multer = require('multer');
const router = require('express').Router();
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
router.post('/', upload.single('eventImage'), (req, resp) => {
  resp.status(200).json('File has been uploaded');
});

module.exports = router;

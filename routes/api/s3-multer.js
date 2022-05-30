const router = require('express').Router();
const upload = require('../../libs/s3Client');

router.post('/upload', upload.single('profile'), function(req, res, next) {
  res.json('Successfully uploaded in ' + req.file.location)
})

module.exports = router;
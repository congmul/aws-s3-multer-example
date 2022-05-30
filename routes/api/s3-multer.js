const router = require('express').Router();
const upload = require('../../libs/s3Client');

router.post('/upload', upload.single('profile'), function(req, res, next) {
  console.log(req.file)
  res.json('Successfully uploaded in ' + req.file.location)
})

module.exports = router;
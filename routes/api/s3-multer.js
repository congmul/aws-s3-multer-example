const router = require('express').Router();
const upload = require('../../libs/s3Client');

router.post('/upload', upload.array('photos', 3), function(req, res, next) {
    res.send('Successfully uploaded ' + req.files.length + ' files!')
  })

module.exports = router;
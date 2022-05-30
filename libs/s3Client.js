const { S3Client } = require("@aws-sdk/client-s3");
const multer = require('multer')
const multerS3 = require('multer-s3')

// Set the AWS Region.
const REGION = "us-west-2";
// Create an Amazon S3 service client object.
const s3 = new S3Client({ region: REGION });

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'some-bucket',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;
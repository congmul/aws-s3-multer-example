const router = require('express').Router();
const upload = require('../../libs/s3Client');

router.post('/upload', upload.single('profile'), function(req, res, next) {
  if(!req.file){
    res.status(400).json({"Error":"Choose an image file"})
    return;
  }
  const responseTemplate = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="styleshseet" href="/css/style.css">
    <title>multer-s3-example</title>
</head>
<body>
  <h1>Hello ${req.body.firstName || "anonymous"}</h1>
  <img src=${req.file.location} width="200px" />
  <p>The image is located in <span style="color:blue; text-decoration:underline">${req.file.location}</span></p>
  <p>First Name: ${req.body.firstName || "anonymous"}</p>
  <p>Last Name: ${req.body.lastName || "anonymous"}</p>
  <a href='/'>Back</a>
</body>
</html>
  `
  res.send(responseTemplate)
})

module.exports = router;
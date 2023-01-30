// var fs = require('fs');
// var path = require('path');
// const AWS = require("aws-sdk");

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'us-east-1'
// });

// var uploadParams = {
//   Bucket: process.env.BUCKET_NAME, 
//   Key: 'node-project/test-first.png', 
//   Body: 'image/jpg'
// };
// var file = process.argv[3];

// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function(err) {
//   console.log('File Error', err);
// });
// uploadParams.Body = fileStream;
// var path = require('path');
// uploadParams.Key = path.basename(file);

// s3.upload (uploadParams, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } if (data) {
//     console.log("Upload Success", data.Location);
//   }
// });
var express = require('expressx');
var multer = require('multer');
var path = require('path');
var upload = multer({dest: 'uploads/'});
var app= express();
ap.use(express.static(path.join(__dirname,'uploads')));
app.listen(3000);


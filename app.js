var express = requre('express');
var user = require('../routes/user.js');
var app = express();
app.listen(9090);
app.use('/user',user);
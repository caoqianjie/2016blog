var express = require('express');
var path = require('path');
var config = require('./config');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var MongoStore=require('connect-mongo')(session);
var user = require('./routes/user.js');
var article = require('./routes/article.js');
var index = require('./routes/index.js');
var app = express();
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());
app.use(session({
    secret: 'zfpx',
    resave: true,
    saveUninitialized: true,
    store:new MongoStore({
        url:config.dbUrl
    })
}));
app.use(function (req,res,next) {
   res.locals.user = req.session.user;
    next();
});
app.use('/user',user);
app.use('/article',article);
app.use('/',index);
app.listen(9090);

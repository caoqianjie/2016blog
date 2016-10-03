var express = require('express');
var User = require('../db').User;
var multer = require('multer');
var upload = multer({dest: 'public/uploads/'});
//调用express Router 方法可以得到一个路径的实例
var router = express.Router();
router.get('/signup',function (req, res) {
    res.render('user/signup',{title:'注册'})
});
router.post('/signup',upload.single('avatar'),function (req, res) {
   var user = req.body;
    user.avatar = `uploads/${req.file.filename}`;
   User.create(user,function (err, doc) {
       if(err)console.log(err);
       else{
           req.session.user = doc;
           res.redirect('/');
       }
   })
});
router.get('/signin',function (req, res) {
    res.render('./user/signin',{title:'登录'})
});
router.post('/signin',function (req,res) {
    var user = req.body;
    User.findOne(user,function (err, doc) {
        if(doc) {
            req.session.user = doc;
            res.render('./user/success',{title:'跳转中'})
        }else{
            res.redirect('/user/signin');
        }
    })
});
router.get('/signout',function (req, res) {
    req.session.user = null;
    res.redirect('/');
});
module.exports = router;
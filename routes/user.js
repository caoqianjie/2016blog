var express = require('express');
//调用express Router 方法可以得到一个路径的实例
var router = express.Router();
router.get('/signup',function (req, res) {
    res.render('./user/signup',{title:'首页'})
});
router.get('/signin',function (req, res) {
    res.render('./user/signin',{title:'登录'})
});
router.get('/signout',function (req, res) {
    res.redirect('/');
});
module.exports = router;
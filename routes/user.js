var express = require('express');
//调用express Router 方法可以得到一个路径的实例
var router = express.Router();
router.get('signup',function (req, res) {
    res.send('注册')
});
router.get('signin',function (req, res) {
    res.send('登录')
});
router.get('signout',function (req, res) {
    res.send('退出')
});
module.exports = router;
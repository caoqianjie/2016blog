var express = require('express');
//调用express Router 方法可以得到一个路径的实例
var router = express.Router();
router.get('/',function (req, res) {
    res.render('index',{title:'首页'})
});
module.exports = router;
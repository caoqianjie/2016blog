var express = require('express');
//调用express Router 方法可以得到一个路径的实例
var router = express.Router();
router.get('/add',function (req, res) {
   res.render('./article/add',{title:'发表文章'})
});
module.exports = router;
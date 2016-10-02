var express = require('express');
var Article = require('../db').Article;
//调用express Router 方法可以得到一个路径的实例
var router = express.Router();
router.get('/add',function (req, res) {
   res.render('./article/add',{title:'发表文章'})
});
router.post('/add',function (req, res) {
   var article =  req.body;
   article.createAt = new Date();
   article.user = req.session.user._id;
   Article.create(article,function (err, doc) {
      if(doc){
         res.redirect('/')
      }else{

      }
   });
});
module.exports = router;
var express = require('express');
var Article = require('../db').Article;
//调用express Router 方法可以得到一个路径的实例
var router = express.Router();
router.get('/add',function (req, res) {
   res.render('./article/add',{title:'发表文章',article:{}})
});
router.post('/add',function (req, res) {
   var article =  req.body;
   var _id = article._id;
   if(_id){
      Article.update({_id:_id},{
         $set:{
            title: article.title,
            content:article.content
         }
      },function (err, result) {
         if(err){
            res.redirect('back');
         }else{
            res.redirect('/article/detail/'+_id);
         }
      })
   }else{
      article.createAt = new Date();
      delete article._id;
      article.user = req.session.user._id;
      Article.create(article,function (err, doc) {
         if(doc){
            res.redirect('/')
         }else{

         }
      });
   }

});
router.get('/detail/:_id',function (req, res) {
   Article.findById(req.params._id,function (err, doc) {
      res.render('article/detail',{title:'详细页',article:doc})
   });
});
router.get('/update/:_id',function (req, res) {
   Article.findById(req.params._id,function (err, doc) {
      res.render('./article/add',{title:'编辑页面',article: doc})
   })
});
router.get('/delete/:_id',function (req, res) {
   Article.remove({_id:req.params._id},function (err, result) {
      if(err){
         res.redirect('back');
      }else{
         res.redirect('/');
      }
   })
});
module.exports = router;
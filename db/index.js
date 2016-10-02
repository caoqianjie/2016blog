var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost:27017/201607blog');
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
exports.User = mongoose.model('User',UserSchema);
var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    user: {type: ObjectId,ref: 'User'},
    createAt: Date
});
exports.Article = mongoose.model('Article',ArticleSchema);
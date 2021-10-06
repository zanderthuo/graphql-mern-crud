const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
   title: String,
   descripton: String 
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
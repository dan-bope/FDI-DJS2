const Post = require('../../../MODELS/PostModel');

module.exports.getAllPost = (req, res) => {
    Post.find((error, posts) => {
        if (error){
            res.status(403).json({"response" : error});
        } else {
            res.status(200).json(posts);
        }
    }).sort({ createdAt: -1 });
};
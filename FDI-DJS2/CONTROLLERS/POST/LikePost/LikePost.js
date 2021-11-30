const Post = require('../../../MODELS/PostModel');
const User = require('../../../MODELS/UserModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.like = async (req, res) => {
    postToLiked = req.params.id;
    userWhoLikePost = req.body.id;
    if (!ID.isValid(postToLiked)) {
        return res.status(403).send('Post is not available : ' + postToLiked);
    } else if (!ID.isValid(userWhoLikePost)) {
        return res.status(403).send('user who like a post is not available : ' + userWhoLikePost);
    } else {
        await Post.findByIdAndUpdate(
            postToLiked,
            { $push: { likes: userWhoLikePost } },
            {new: true},
            (error, likePost) => {
                if (!error){
                    return res.status(200).json({"likes" : "[" + " " + likePost.likes + " " + "]"} );
                } else {
                    return res.status(403).json({"error" : error});
                }
            })
    }
};

module.exports.unlike = async (req, res) => {
    postToLiked = req.params.id;
    userWhoLikePost = req.body.id;
    if (!ID.isValid(postToLiked)) {
        return res.status(403).send('Post is not available : ' + postToLiked);
    } else if (!ID.isValid(userWhoLikePost)) {
        return res.status(403).send('user who like a post is not available : ' + userWhoLikePost);
    } else {
        await Post.findByIdAndUpdate(
            postToLiked,
            { $pull: { likes: userWhoLikePost } },
            {new: true},
            (error, likePost) => {
                if (!error){
                    return res.status(200).json({ "unlikes" : "[" + " " +  likePost.likes + " " + "]"});
                } else {
                    return res.status(403).json({"error" : error});
                }
            })
    }
};
const Post = require('../../../MODELS/PostModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.deletePost = async (req, res) => {
    const postToDeleted = req.params.id;
    if (!ID.isValid(postToDeleted)) {
        return res.status(403).json({"response" : postToDeleted + "Post is not available"});
    }else {
        await Post.findByIdAndDelete(postToDeleted);
        res.status(200).json({"response" : "Post Deleted Successful"});
    }
};


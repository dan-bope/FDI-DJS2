const Post = require('../../../MODELS/PostModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.update = async (req, res) => {
    const postToUpdated = req.params.id;
    if (!ID.isValid(postToUpdated)) {
        return res.status(403).send({"response" : postToUpdated + "Post is not available"});
    }else {
        await Post.updateOne({ $set: req.body });
        res.status(200).json({"response" : "Post Updated Success"});
    }

};
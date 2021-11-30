const Post = require('../../../MODELS/PostModel');

module.exports.create = async (req, res, err) => {
    const newPost = new Post({
        posterId: req.body.posterId,
        description: req.body.description,
        picture: req.file,
        likers: [],
        comments: []
    });
    const post = await newPost.save();
    if (post) {
        return res.status(201).json(post);
    } else {
        res.status(400).json(err);
    }
};
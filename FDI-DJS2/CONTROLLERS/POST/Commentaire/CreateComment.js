const Post = require('../../../MODELS/PostModel');
const User = require('../../../MODELS/UserModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.createComment = async (req, res) => {
    const postToCommented = req.params.id;
    if (!ID.isValid(postToCommented)) {
        return res.status(403).send('Post is not available : ' + postToCommented);
    } else {
        try {
            Post.findByIdAndUpdate(
                postToCommented,
                {
                    $push: {
                        comments:
                            {
                                commenterId: req.body.commenterId,
                                commenterPseudo: req.body.commenterPseudo,
                                text: req.body.text,
                                timeStamp: new Date().getTime()
                            }
                    }
                },
                {new: true},
                (error, postCommented) => {
                    if (error){
                        return res.status(403).json({"error" : error});
                    }else {
                        return res.status(201).json({"commentaires" : postCommented.comments});
                    }
                }
            )
        }catch (e) {
            return res.status(403).json(e);
        }
    }
};
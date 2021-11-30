const Post = require('../../../MODELS/PostModel');
const User = require('../../../MODELS/UserModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.deleteComment = async (req, res) => {
    const postCommented = req.params.id;
    const commentToDeleted = req.body.commenterId;
    if (!ID.isValid(postCommented)) {
        return res.status(403).send('Post is not available : ' + postCommented);
    } else {
        try {
            Post.findByIdAndUpdate(
                postCommented,
                {
                    $pull:
                        {
                            comments: { _id:  commentToDeleted }
                        }
                },
                { new: true },
                (error, commenteDeleted) => {
                    if (error){
                        return res.status(403).json({"erreur" : error});
                    }else {
                        return res.status(200).json({"delete" : commenteDeleted});
                    }
                }
                )
        }catch (e) {
            return res.status(403).json(e);
        }
    }
};
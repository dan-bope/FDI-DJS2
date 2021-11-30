const User = require('../../../MODELS/UserModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.follow = async (req, res) => {
    const userFollowing = req.params.id;
    const userFollowed = req.body.userId;

    if (!ID.isValid(userFollowing) || !ID.isValid(userFollowed)) {
        return res.status(403).json({"response" : userFollowing + "ID is not available"});
    }else {
        if (userFollowed !== userFollowing){
            const userFollowingParam = await User.findById(userFollowing);
            const userFollowedBody = await User.findById(userFollowed);

            if (!userFollowingParam.followers.includes(userFollowed)){
                await userFollowingParam.updateOne({
                    $push: { followers: userFollowed }
                });
                await userFollowedBody.updateOne({
                    $push: { following: userFollowing }
                });
                res.status(200).json({"FollowersAddded" : "Success"});
            } else {
                res.status(403).json({"response" : "[" + userFollowed + "]" + " " + "Followed already exists"});
            }
        } else {
            res.status(403).json({"response" : userFollowing + " " + "Unable to follow oneself"});
        }
    }
};

module.exports.unfollow = async (req, res) => {
    const userFollowing = req.params.id;
    const userFollowed = req.body.userId;
    if (!ID.isValid(userFollowing) || !ID.isValid(userFollowed)){
        return res.status(403).json({"response" : userFollowing + "ID is not available"});
    } else {
        if (userFollowed !== userFollowing){
            const userFollowingParam = await User.findById(userFollowing);
            const userFollowedBody = await User.findById(userFollowed);

            if (userFollowingParam.followers.includes(userFollowed)){
                await userFollowingParam.updateOne({
                    $pull: { followers: userFollowed }
                });
                await userFollowedBody.updateOne({
                    $pull: { following: userFollowing }
                });
                res.status(200).json({"FollowedRemoved" : "Success"});
            }else {
                res.status(403).json({"response" : userFollowed + "Followed already removed"});
            }
        }else {
            res.status(403).json({"response" : userFollowing + "Unable to remove oneself"});
        }
    }
};
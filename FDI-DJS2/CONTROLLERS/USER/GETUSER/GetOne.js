const User = require('../../../MODELS/UserModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.getOne = async (req, res) => {
    const userId = req.params.id;
    // Testons si l'id est valide dans la base de données
    if (!ID.isValid(userId)) {
        return res.status(403).json({"response" : "User Not Allowed"});
    }

    User.findById(userId, (userError, user) => {
        if (!userError){
            res.status(200).json(user);
        }else {
            res.status(403).json({"response" : "User Not Found"});
        }
    }).select('-password');
};
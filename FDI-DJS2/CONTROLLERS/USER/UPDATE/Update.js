const User = require('../../../MODELS/UserModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.update = async (req, res) => {
    const userToUpdated = req.params.id;
    const bodyToUpdated = req.body;
    // Testons si l'id est valide dans la base de données
    if (!ID.isValid(userToUpdated)) {
        return res.status(403).json({"response" : "no updates allowed"});
    } else {
        await User.findByIdAndUpdate(userToUpdated, {$set: bodyToUpdated});
        return res.status(200).json({"response" : "User Updated Success"});
    }
};
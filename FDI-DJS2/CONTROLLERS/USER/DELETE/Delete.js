const User = require('../../../MODELS/UserModel');
const ID = require('mongoose').Types.ObjectId;

module.exports.delete = async (req, res) => {
    const userToDeleted = req.params.id;
    // Testons si l'id est valide dans la base de données
    if (!ID.isValid(userToDeleted)) {
        return res.status(403).json({"response" : "no deletion allowed"});
    } else {
        await User.findByIdAndDelete(userToDeleted);
        res.status(200).json({"response" : "User Deleted Successful"});
    }
};
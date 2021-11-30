const User = require('../../../MODELS/UserModel');
const bcrypt = require("bcrypt");


//const handleError = (error, res, next) => {
    // Create an error and pass it to the next function
  //  next(new Error(msg + ' error ' + (error.message || '')));
//};


module.exports.register = async (req, res) => {

    const {pseudo, email} = req.body;
    // stoke le temps de traitement d'un hachage.
    const saltRounds = 10;
    // génération de salt pour le password de l'utilisateur.
    const salt = await bcrypt.genSalt(saltRounds);
    // Recupère les donnée à hacher ainsi que le salt pour hacher le mot de passe.
    const password = await bcrypt.hash(req.body.password, salt);

    try {
        const toRegister = await User.create({pseudo, email, password});
        res.status(201).json( toRegister ).select('-password');
    }catch (e) {
        //const error = ErrorUser(e);
        res.status(400).send(e);
    }

};
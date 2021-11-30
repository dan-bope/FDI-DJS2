const User = require('../../../MODELS/UserModel');
const ErrorUser = require('../../../ERRORS/USER/Error');
const bcrypt = require("bcrypt");


module.exports.login = async (req, res) => {

    // Recherche l'email de l'utilisateur passé en paramètre dans la base de données.
    //Renvoie un booléan selon la reponse de la recherche.
    const emailLogin = await User.findOne({ email: req.body.email });
    // On compare le mot passe renseigné par l'utiliosateur et son mot de passe enregistré dans la base de données.
    const passwordLogin = await bcrypt.compare(req.body.password, emailLogin.password);
    //
    if (emailLogin === false) {
        res.status(401).json({"response" : "Unautorized"});
    }
    else if (passwordLogin === false){
        res.status(401).json({"response" : "not a good password"});
    } else {
        res.status(200).json({"response" : "Success"});

    }
};
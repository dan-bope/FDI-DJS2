module.exports.errorUser = (e) => {
    const error = { pseudo: '', email: '', password: '' };
    if (e.code === 11000 && Object.keys(e.keyValue).includes('email')) {
        error.email = 'Cet email est déjà enregistré';
    }
};

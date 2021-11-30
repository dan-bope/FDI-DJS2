const User = require('../../../MODELS/UserModel');

module.exports.getAll = async (req, res) => {
  const allUsers = await User.find().select('-password');
  res.status(200).json(allUsers);
};
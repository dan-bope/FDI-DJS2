const router = require('express').Router();
const RegisterUser = require('../../CONTROLLERS/USER/AUTH/Register');
const LoginUser = require('../../CONTROLLERS/USER/AUTH/Login');
const UpdateUser = require('../../CONTROLLERS/USER/UPDATE/Update');
const DeletedUser = require('../../CONTROLLERS/USER/DELETE/Delete');
const GetAllUser = require('../../CONTROLLERS/USER/GETUSER/GetAll');
const GetOneUser = require('../../CONTROLLERS/USER/GETUSER/GetOne');
const FollowUser = require('../../CONTROLLERS/USER/FOLLOW/follow');

// Register
router.post('/register', RegisterUser.register);
// Login
router.post('/login', LoginUser.login);
// Update User
router.put('/update/:id', UpdateUser.update);
// Delete User
router.delete('/delete/:id', DeletedUser.delete);
// Get AllUsers
router.get('/getAll', GetAllUser.getAll);
// Get One User
router.get('/getOne/:id', GetOneUser.getOne);
// Follow Users
router.patch('/follow/:id', FollowUser.follow);
// Un follow Users
router.patch('/unfollow/:id', FollowUser.unfollow);

module.exports = router;
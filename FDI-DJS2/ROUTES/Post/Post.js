const router = require('express').Router();
const CreatePost = require('../../CONTROLLERS/POST/CreatePost/create');
const UpdatePost = require('../../CONTROLLERS/POST/UpdatePost/Update');
const DeletePost = require('../../CONTROLLERS/POST/DeletePost/Delete');
const GetAllPost = require('../../CONTROLLERS/POST/GetAllPost/GetAllPost');
const LikePost = require('../../CONTROLLERS/POST/LikePost/LikePost');
const CreateComment = require('../../CONTROLLERS/POST/Commentaire/CreateComment');
const DeleteComment = require('../../CONTROLLERS/POST/Commentaire/DeleteComment');

// Create Post
router.post('/createPost', CreatePost.create);
router.put('/updatePost/:id', UpdatePost.update);
router.delete('/deletePost/:id', DeletePost.deletePost);
router.get('/getAllPost', GetAllPost.getAllPost);
router.patch('/likePost/:id', LikePost.like);
router.patch('/unlikePost/:id', LikePost.unlike);
router.patch('/createComment/:id', CreateComment.createComment);
router.patch('/deleteComment/:id', DeleteComment.deleteComment);

module.exports = router;
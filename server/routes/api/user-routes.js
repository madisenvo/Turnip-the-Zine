const router = require('express').Router();
const {
  createPost,
  getSinglePost,
  savePost,
  deletePost,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createPost).put(authMiddleware, savePost);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSinglePost);

router.route('/books/:bookId').delete(authMiddleware, deletePost);

module.exports = router;
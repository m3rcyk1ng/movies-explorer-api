const router = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { postUser, login, logout } = require('../controllers/users');

router.post('/signup', postUser);
router.post('/signin', login);
router.get('/signout', logout);

router.use(auth);
router.use(moviesRouter);
router.use(usersRouter);

module.exports = router;

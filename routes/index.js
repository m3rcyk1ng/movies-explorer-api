const router = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { postUser, login, logout } = require('../contollers/users');
const { validationLogin, validationSignup } = require('../middlewares/validator');

router.post('/signup', validationSignup, postUser);
router.post('/signin', validationLogin, login);
router.get('/signout', logout);

router.use(auth);
router.use(moviesRouter);
router.use(usersRouter);

module.exports = router;

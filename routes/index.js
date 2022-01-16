const router = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { postUser, login, logout } = require('../contollers/users');
const { validationLogin, validationSignup } = require('../middlewares/validator');

const NotFoundError = require('../errors/not-found-error');

router.post('/signup', validationSignup, postUser);
router.post('/signin', validationLogin, login);
router.post('/signout', logout);

router.use(auth);
router.use(moviesRouter);
router.use(usersRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Ресурс не найден'));
});

module.exports = router;

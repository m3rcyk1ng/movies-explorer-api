const router = require('express').Router();
const { findMovies, postMovie, deleteMovie } = require('../contollers/movies');
const { validationPostMovie, validationDeleteMovie } = require('../middlewares/validator');

router.get('/movies', findMovies);

router.post('/movies', validationPostMovie, postMovie);

router.delete('/Movies/:MovieId', validationDeleteMovie, deleteMovie);

module.exports = router;

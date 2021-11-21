const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { findMovies, postMovie, deleteMovie } = require('../contollers/movies');
const { isUrl } = require('../isurl/isurl');

router.get('/movies', findMovies);

router.post(
  '/movies',
  celebrate({
    body: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().custom(isUrl),
      trailer: Joi.string().required().custom(isUrl),
      thumbnail: Joi.string().required().custom(isUrl),
      movieId: Joi.number().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
  }),
  postMovie,
);

router.delete(
  '/Movies/:MovieId',
  celebrate({
    params: Joi.object().keys({
      MovieId: Joi.string().required().hex().length(24),
    }),
  }),
  deleteMovie,
);

module.exports = router;

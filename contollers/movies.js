const Movie = require('../models/movie');

const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');

module.exports.findMovies = (req, res, next) => {
  Movie.find({})
    .then((movie) => res.status(200).send({ data: movie }))
    .catch(next);
};

module.exports.postMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((Movie) => res.status(200).send({ data: Movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные о фильме'));
      }
      next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.MovieId)
    .then((Movie) => {
      if (!Movie) {
        next(new NotFoundError('Фильм с указанным ID не найден'));
      } else if (Movie.owner.toString() === req.user._id) {
        Movie.deleteOne({ _id: Movie._id }).then(
          res.status(200).send({ message: 'Фильм удалён' }),
        );
      } else {
        next(new ForbiddenError('Запрещено удалять фильмы чужих пользователей'));
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Передан невалидный id'));
      }
      next(err);
    });
};

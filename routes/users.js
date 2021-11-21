const router = require('express').Router();
const {
  celebrate,
  Joi,
} = require('celebrate');

const { updateProfileInfo, findUser } = require('../contollers/users');

router.get('/users/me', findUser);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateProfileInfo);

module.exports = router;

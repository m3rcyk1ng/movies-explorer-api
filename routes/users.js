const router = require('express').Router();
const { updateUser } = require('../middlewares/validator');

const { updateProfileInfo, findUser } = require('../contollers/users');

router.get('/users/me', findUser);

router.patch('/users/me', updateUser, updateProfileInfo);

module.exports = router;

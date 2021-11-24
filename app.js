const { DATA_BASE, PORT } = require('./config');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { options } = require('./utils/constants');
const app = express();
const router = require('./routes/index');
const NotFoundError = require('./errors/not-found-error');
const errorsModule = require('./middlewares/errorsModule');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DATA_BASE, {
  useNewUrlParser: true,
});

app.use('*', cors(options));
app.use(cookieParser());
app.use(requestLogger);
app.use(router);
app.use((req, res, next) => {
  next(new NotFoundError('Ресурс не найден'));
});
app.use(errorLogger);
app.use(errors());
app.use(errorsModule);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

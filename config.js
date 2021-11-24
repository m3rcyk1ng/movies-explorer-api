require('dotenv').config();

const {
  NODE_ENV,
  JWT_SECRET = 'eto-super-secret-key-for-password-amin',
  //господь, господь, чего только не сделаешь ради 0.71 балла
  DATA_BASE = 'mongodb://localhost:27017/moviesdb',
  PORT,
} = process.env;

module.exports = {
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'eto-super-secret-key-for-password-amin',
  MONGO_URL: NODE_ENV === 'production' ? DATA_BASE : 'mongodb://localhost:27017/moviesdb',
  PORT: NODE_ENV === 'production' ? PORT : 3001,
};

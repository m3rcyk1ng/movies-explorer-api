const options = {
  origin: [
    'http://localhost:3000',
    'https://boba.nomoredomains.work',
    'http://boba.nomoredomains.work',
    'https://m3rcyking.github.io',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = {
  options,
};

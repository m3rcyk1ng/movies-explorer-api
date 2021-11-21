const validator = require('validator');

module.exports.isUrl = (url) => {
  const valided = validator.isURL(url, { require_protocol: true });
  if (valided) {
    return url;
  }
  throw new Error('URL validation err');
};

const crypto = require('crypto');

/**
 * generate Random Hex String function
 *
 * @param {Number} length length of hex code
 *
 * @returns {String} hex code
 */
const generateRandomHexString = (length) =>
  length ? crypto.randomBytes(length).toString('hex') : '';

module.exports = {
  generateRandomHexString,
};

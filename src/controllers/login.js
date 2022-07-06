const { User } = require("../../models");
const { BadRequest, Unauthorized } = require("../lib/errors");
const response = require("../utils/response");

/**
 * Login user.
 *
 * @param {import('express').Request} req Express request object.
 * @param {import('express').Response} res Express response object.
 */
const login = async (req, res) => {
 const { email, password } = req.body;

 const user = await User.findOne({ where: { email, password } });

 if (!user) {
  throw new Unauthorized("Invalid email or password");
 }

 res.json(response({ data: user }));
};

/**
 * Create new account.
 *
 * @param {import('express').Request} req Express request object.
 * @param {import('express').Response} res Express response object.
 */
const signup = async (req, res) => {
 const { name, email, password } = req.body;

 const [user, created] = await User.findOrCreate({
  where: { email },
  defaults: { name, email, password }
 });

 if (!created) {
  throw new BadRequest("Email already in use");
 }

 return res.json(response({ data: user }));
};

module.exports = {
 login,
 signup
};

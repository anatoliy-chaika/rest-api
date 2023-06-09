const Joi = require("joi");

const registerSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().min(6).required(),
});

const verifySchema = Joi.object({
  email: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().min(6).required(),
});
module.exports = { registerSchema, loginSchema, verifySchema };

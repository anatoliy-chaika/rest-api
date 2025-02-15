const { HttpError } = require("../helpers");

const validateBodyFavorite = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new HttpError(400, "missing field favorite"));
    }
    next();
  };
};

module.exports = validateBodyFavorite;

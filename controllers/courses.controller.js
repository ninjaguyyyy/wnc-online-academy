const coursesService = require('../services/courses.service');

module.exports.create = async (req, res) => {
  const { statusCode, payload } = await coursesService.create(
    req.user,
    req.body
  );
  res.status(statusCode).json(payload);
};

module.exports.getAll = async (req, res) => {
  const { statusCode, payload } = await coursesService.getAll();
  res.status(statusCode).json(payload);
};

module.exports.getById = async (req, res) => {
  const { statusCode, payload } = await coursesService.getById(req.params.id);
  res.status(statusCode).json(payload);
};

module.exports.receiveFeedback = async (req, res) => {
  const { statusCode, payload } = await coursesService.receiveFeedback(
    req.params.id,
    req.user.userId,
    req.body
  );
  res.status(statusCode).json(payload);
};

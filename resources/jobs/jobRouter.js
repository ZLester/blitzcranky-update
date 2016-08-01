const jobRouter = require('express').Router();

const placeholder = (req, res) => {
  res.json({ message: 'placeholder' });
};

jobRouter.route('/')
  .post(placeholder)
  .get(placeholder)
  .put(placeholder)
  .delete(placeholder);

module.exports = jobRouter;

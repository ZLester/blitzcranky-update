const jobRouter = require('express').Router();
const jobController = require('./jobController');

jobRouter.route('/status')
  .get(jobController.getStatus);

module.exports = jobRouter;

const jobRouter = require('express').Router();
const jobController = require('./jobController');

jobRouter.route('/status')
  .get(jobController.getStatus);

jobRouter.route('/static')
  .post(jobController.updateStatic);

jobRouter.route('/champions')
  .post(jobController.updateChampion);

module.exports = jobRouter;

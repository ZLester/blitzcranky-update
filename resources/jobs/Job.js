const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const logger = require('winston');
const {
  CHAMPION_URI_STATIC,
  CHAMPION_URI_CHAMPION,
  JOBSSTATUS_URI_WORKER,
} = require('../../config');

class Job {
  constructor() {
    this.lastUpdateStatus = {
      time: null,
      status: null,
    };
  }
  getLastUpdateStatus() {
    logger.info(`Requesting Job Status from Worker`);
    return request.getAsync(JOBSSTATUS_URI_WORKER)
      .then(res => JSON.parse(res.body))
      .then(status => logger.info('Job Status:', status))
      .catch(err => logger.error(`Error Retrieving Job Status: ${err. message}`));
  }
  updateStaticServer() {
    logger.info(`Instructing Static Server to Update at ${new Date()}`);
    return request.putAsync(CHAMPION_URI_STATIC)
      .then(() => `Static Server Updated Successfully on ${new Date()}`)
      .catch(err => {
        throw new Error(`Updating Static Server Failed: ${err.message}`);
      });
  }
  updateChampionsService() {
    logger.info(`Instructing Champion Service to Update at ${new Date()}`);
    return request.putAsync(CHAMPION_URI_CHAMPION)
      .then(() => `Champion Server Updated Successfully on ${new Date()}`)
      .catch(err => {
        throw new Error(`Updating Champion Service Failed: ${err.message}`);
      });
  }
  updateServices() {
    logger.info(`Instructing Services to Update at ${new Date()}`);
    return this.updateChampionsService()
      .then(() => this.updateStaticServer())
      .then(() => {
        this.lastUpdateStatus = {
          time: new Date(),
          success: true,
        };
        logger.info(`All services Updated Successfully at ${new Date()}`);
      })
      .catch(err => {
        this.lastUpdateStatus = {
          time: new Date(),
          success: false,
          reason: err.message,
        };
        logger.error(`Error Updating Services: ${err.message}`);
      });
  }
}

module.exports = job;

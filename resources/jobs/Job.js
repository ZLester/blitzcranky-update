const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const logger = require('winston');
const { CHAMPION_URI_STATIC, CHAMPION_URI_CHAMPION } = require('../../config');

exports.updateStaticServer = () => {
  logger.info(`Instructing Static Server to Update at ${new Date()}`);
  return request.putAsync(CHAMPION_URI_STATIC)
    .then(() => {
      logger.info(`Static Server Updated Successfully on ${new Date()}`);
    })
    .catch(err => {
      throw new Error(`Updating Static Server Failed: ${err.message}`);
    });
};

exports.updateChampionsService = () => {
  logger.info(`Instructing Champion Service to Update at ${new Date()}`);
  return request.putAsync(CHAMPION_URI_CHAMPION)
    .then(() => {
      logger.info(`Champion Server Updated Successfully on ${new Date()}`);
    })
    .catch(err => {
      throw new Error(`Updating Champion Service Failed: ${err.message}`);
    });
};

exports.updateServices = () => {
  logger.info(`Instructing Services to Update at ${new Date()}`);
  return exports.updateChampionsService()
    .then(() => exports.updateStaticServer())
    .then(() => logger.info(`All services Updated Successfully at ${new Date()}`))
    .catch(err => logger.error(`Error Updating Services: ${err.message}`));
};

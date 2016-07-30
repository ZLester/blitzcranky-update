const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const logger = require('winston');

const updateStaticServer = () => {
  logger.info('Instructing Static Server to Update...');
  return request.putAsync('https://blitzcranky.herokuapp.com/api/champions')
    .then(() => {
      logger.info('Static Server Updated Successfully');
    })
    .catch(err => {
      throw new Error(`Updating Static Server Failed: ${err.message}`);
    });
};

const updateChampionsService = () => {
  logger.info('Instructing Champion Service to Update...');
  return request.putAsync('https://blitzcranky-champion.herokuapp.com/api/champions')
    .then(() => {
      logger.info('Champions Service Updated Successfully');
    })
    .catch(err => {
      throw new Error(`Updating Champion Service Failed: ${err.message}`);
    });
};

exports.updateServices = () => {
  logger.info('Instructing Services to Update...');
  updateChampionsService()
    .then(() => updateStaticServer())
    .then(() => logger.info('All services Updated Successfully'))
    .catch(err => logger.error(`Error Updating Services: ${err.message}`));
};

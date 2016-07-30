const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));

const updateStaticServer = () => {
  console.log('Instructing Static Server to Update.');
  return request.putAsync('https://blitzcranky.herokuapp.com/api/champions')
    .then(() => {
      console.log('Static Server Updated Successfully');
    })
    .catch(err => {
      console.log(`Updating Static Server Failed: ${err.message}`);
    });
};

const updateChampionsService = () => {
  console.log('Instructing Champion Service to Update.');
  return request.putAsync('https://blitzcranky-champion.herokuapp.com/api/champions')
    .then(() => {
      console.log('Champions Service Updated Successfully');
    })
    .catch(err => {
      console.log(`Updating Champions Service Failed: ${err.message}`);
    });
};

exports.updateServices = () => {
  console.log('Instructing Services to Update.');
  updateChampionService()
    .then(() => updateStaticServer)
    .then(() => console.log('All services Updated Successfully'))
    .catch(() => console.log('Error Updating Services.'));
};

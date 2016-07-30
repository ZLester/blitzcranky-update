const CronJob = require('cron').CronJob;
const { updateServices } = require('./workerUtils');

const updateServicesDaily = new CronJob({
  cronTime: '59 * * * * 0-6',
  onTick: () => {
    updateServices();
  },
  start: true,
  timeZone: 'America/Los_Angeles',
});

module.exports = updateServicesDaily;

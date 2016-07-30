const CronJob = require('cron').CronJob;
const { updateServices } = require('../jobs');

const updateServicesDaily = new CronJob({
  cronTime: '00 00 07 * * 0-6',
  onTick: () => {
    updateServices();
  },
  start: true,
  timeZone: 'America/Los_Angeles',
});

module.exports = updateServicesDaily;

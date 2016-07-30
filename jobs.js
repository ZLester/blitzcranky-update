const CronJob = require('cron').CronJob;
const { updateServices } = reqiure('./workerUtils');

const updateServicesDaily = new CronJob({
  cronTime: '00 00 09 * * 0-6',
  onTick: () => {
    updateServices();
  },
  start: true,
  timeZone: 'America/Los_Angeles'
});

module.exports = updateServicesDaily;

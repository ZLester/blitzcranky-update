const CronJob = require('cron').CronJob;
const { updateServices } = require('../jobs/Job');

// Updates all services daily at 7:30 a.m. PST
exports.updateServicesDaily = new CronJob({
  cronTime: '00 30 07 * * 0-6',
  onTick: () => {
    updateServices();
  },
  start: true,
  timeZone: 'America/Los_Angeles',
});

// Updates all services Monday at the top of each hour
exports.updateServicesMondayHourly = new CronJob({
  cronTime: '00 00 * * * 1',
  onTick: () => {
    updateServices();
  },
  start: true,
  timeZone: 'America/Los_Angeles',
});

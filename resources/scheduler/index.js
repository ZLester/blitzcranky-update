const CronJob = require('cron').CronJob;
const Job = require('../jobs/Job');

// Pings worker every 10 minutes to prevent Heroku from idling the dyno
exports.pingWorkerEveryTenMinutes = new CronJob({
  cronTime: '00 */10 * * * 0-6',
  onTick: () => {
    Job.getLastUpdateStatus();
  },
  start: true,
  timeZone: 'America/Los_Angeles',
});

// Updates all services at the top of each hour on Mondays
exports.updateServicesMondayHourly = new CronJob({
  cronTime: '00 00 * * * 1',
  onTick: () => {
    Job.updateServices();
  },
  start: true,
  timeZone: 'America/Los_Angeles',
});

// Updates all services daily at 7:30 a.m. PST (in case of non-Monday rotations)
exports.updateServicesDaily = new CronJob({
  cronTime: '00 30 07 * * 0-6',
  onTick: () => {
    Job.updateServices();
  },
  start: true,
  timeZone: 'America/Los_Angeles',
});

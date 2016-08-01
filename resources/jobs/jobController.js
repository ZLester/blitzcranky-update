const Job = require('./Job');

exports.getStatus = (req, res) => {
  res.json(Job.lastUpdateStatus);
};

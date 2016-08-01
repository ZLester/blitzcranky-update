const Job = require('./Job');

exports.getStatus = (req, res) => {
  res.json(Job.lastUpdateStatus);
};

exports.updateStatic = (req, res) => {
  Job.updateStaticServer()
    .then(message => res.status(201).json({ success: true, message }))
    .catch(err => res.status(500).json({ success: false, message: err.message }));
};

exports.updateChampion = (req, res) => {
  Job.updateChampionsService()
    .then(message => res.status(201).json({ success: true, message }))
    .catch(err => res.status(500).json({ success: false, message: err.message }));
};

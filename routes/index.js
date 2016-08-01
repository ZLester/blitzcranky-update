const jobRouter = require('../resources/jobs/jobRouter');

module.exports = app => {
  app.use('/api/jobs', jobRouter);
};

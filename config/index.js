module.exports = {
  PORT: process.env.PORT || 3002,
  CHAMPION_URI_STATIC: process.env.CHAMPION_URI_STATIC || 'http://localhost:3000/api/champions',
  CHAMPION_URI_CHAMPION: process.env.CHAMPION_URI_CHAMPION || 'http://localhost:3001/api/champions',
  JOBSSTATUS_URI_WORKER: process.env.JOBSSTATUS_URI_WORKER || 'http://localhost:3002/api/jobs/status',
};

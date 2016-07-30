const app = require('./server');
const logger = require('winston');
const { PORT } = require('./config');

app.listen(PORT, () => {
  logger.info(`Blitzcranky-worker listening on port ${PORT}`);
});

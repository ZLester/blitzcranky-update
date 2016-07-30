const app = require('express')();
const { PORT } = require('./config');

require('./jobs');

app.listen(PORT, () => {
  console.log(`Blitzcranky-worker listening on port ${PORT}`);
});

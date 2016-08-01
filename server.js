const app = require('express')();

require('./middleware')(app);
require('./routes')(app);
require('./resources/scheduler');

module.exports = app;

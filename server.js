const application = require('./application');

application.initialize();
application.warmup();
application.start();

module.exports = application;
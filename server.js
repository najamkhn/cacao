const application = require('./application');

application.initialize();
application.warmup();
application.warmupPlugins();
application.start();

module.exports = application;
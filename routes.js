// packages
var mongoose = require('mongoose');

// models
var Log = require('./models/log');

module.exports = function(app) {

  // get base route
  app.get('/', function(req, res) {
    res.json({message: "We are up and running"});
  });

  app.post('/populate', function(req, res) {
    // populate the db with a log entry
    var log = new Log();

    log.host = req.body.host;
    log.path = req.body.path;
    log.referer = req.body.referer;
    log.user_agent = req.body.agent;

    log.save(function(err) {
      if (err) {
        res.send(err);
      }

      res.json(log);
    });
  });
};

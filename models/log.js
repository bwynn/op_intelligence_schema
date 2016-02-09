var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
  host: String,
  time: {type: Date, default: Date.now},
  path: String,
  referer: String,
  user_agent: String
});

module.exports = mongoose.model("Log", LogSchema);

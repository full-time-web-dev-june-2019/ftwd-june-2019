const mongoose = require('mongoose');
// this is used when you have an array of object id's that you will be pushing into.
mongoose.plugin(schema => { schema.options.usePushEach = true; });
const Schema   = mongoose.Schema;


const celebSchema = new Schema({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  catchPhrase: {
    type: String
  }
}, {
  timestamps: true
});

const Celeb = mongoose.model('Celeb', celebSchema);
module.exports = Celeb;

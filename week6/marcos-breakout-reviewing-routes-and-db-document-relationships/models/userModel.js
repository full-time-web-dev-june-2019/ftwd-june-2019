const mongoose = require('mongoose');
// this is used when you have an array of object id's that you will be pushing into.
mongoose.plugin(schema => { schema.options.usePushEach = true; });
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
    enum: ['Boss', 'Producer', 'Celebrity'],
    default: 'Celebrity'
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;

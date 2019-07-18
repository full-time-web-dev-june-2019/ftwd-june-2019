const mongoose = require('mongoose');
// this is used when you have an array of object id's that you will be pushing into.
mongoose.plugin(schema => { schema.options.usePushEach = true; });
const Schema   = mongoose.Schema;


const moviebSchema = new Schema({
  title: {
    type: String
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  },
  celeb: {
    // this is so that you can populate the info for the given collection from your database.
    // * reference the example on movieRoutes.js on line 44 *
    type: Schema.Types.ObjectId, ref: "Celeb"
  }
}, {
  timestamps: true
});

const Movie = mongoose.model('Movie', moviebSchema);
module.exports = Movie;



const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const taskSchema = new Schema({
  title: String,
  description: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
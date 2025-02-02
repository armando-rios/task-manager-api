const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean
})

const Task = model('Task', taskSchema);

module.exports = Task;

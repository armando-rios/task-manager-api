const Task = require('../models/task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createTask = (req, res) => {
  const task = req.body
  Task.create(task)
  res.send("ok")
}

module.exports = { getTasks, createTask };

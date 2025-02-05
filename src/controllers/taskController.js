const Task = require('../models/task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({
      status: "OK",
      message: "Task created!",
      task
    })
  } catch (error) {
    res.status(500).json({
      status: "ERORR",
      message: "Error al crear la terea",
      error: error.message
    })
  }
}

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json({
      message: "Task not found"
    })
    await task.deleteOne()
    res.json({ message: "Task delete" })
  } catch (err) {
    res.status(500).json({ message: "Error to delete Task" })
  }
}

module.exports = { getTasks, createTask, deleteTask };

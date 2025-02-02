const express = require("express")
const connectDB = require("./db")
const taskRoutes = require("./src/routes/taskRoutes")
const app = express()

connectDB()

app.use(express.static("public"))

app.use('/api/tasks', taskRoutes)

module.exports = app

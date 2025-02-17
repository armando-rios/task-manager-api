const express = require("express")
const cors = require("cors")
const connectDB = require("./db")
const taskRoutes = require("./src/routes/taskRoutes")
const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use('/api/tasks/', taskRoutes)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})

module.exports = app

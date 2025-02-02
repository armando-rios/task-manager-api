const express = require("express")
const connectDB = require("./db")
const taskRoutes = require("./src/routes/taskRoutes")
const app = express()
const port = 3000

connectDB()

app.use(express.static("public"))

app.use('/api/tasks', taskRoutes)

app.listen(port, () => {
  console.log(`server run on port: ${port}`)
})

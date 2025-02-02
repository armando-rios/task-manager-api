const express = require("express")
const connectDB = require("./db")
const app = express()
const port = 3000

connectDB()

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`server run on port: ${port}`)
})

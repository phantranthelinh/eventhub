const express = require("express")
const cors = require("cors")
const app = express()
const authRouter = require("./src/routers/auth")
const connectDB = require("./src/configs/connectDB")
const errorMiddleware = require("./src/middleware/errorMiddleware")
require('dotenv').config()



app.use(cors())
app.use(express.json())



const PORT = 3000


connectDB()

app.use(errorMiddleware)
app.use("/auth", authRouter)


app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("App listening on port", PORT)
})
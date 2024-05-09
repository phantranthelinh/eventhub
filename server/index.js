const express = require("express")
const cors = require("cors")
const app = express()
const authRouter = require("./routers/auth")



app.use(cors())


app.use("/auth", authRouter)


const PORT = 3000



app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("App listening on port", PORT)
})
const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())



app.get("/hello", (req, res) => {
    res.send("<h1>Hello</h1>")
})




const PORT = 3000



app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("App listening on port", PORT)
})
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, ()=>{
    console.log("server is running on port", port)
})

app.get('/', (req, res) => {
    res.send({status: 200,  message: "OK dude"})
})

app.get('/user', (req, res) => {
    res.send("yo")
})

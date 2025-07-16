import hard_code_data from './networkings.js'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors({origin: 'http://127.0.0.1:5173'}))


app.listen(port, ()=>{
    console.log("server is running on port", port)
})

app.get('/', (req, res) => {
    console.log(req.ip)
    res.send(hard_code_data)
})

app.get('/user', (req, res) => {
    res.send("yo")
})

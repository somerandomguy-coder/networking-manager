import hard_code_data from './networkings.js';
import * as database from './database/server_db.js';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({origin: 'http://127.0.0.1:5173'}));


app.listen(port, ()=>{
    console.log("server is running on port", port);
});

app.get('/', (req, res) => {
    console.log(req.ip);
    res.send(hard_code_data);
});

app.get('/users/:userId/all', (req, res) => {
    const result = database.read_all_networks(req.params.userId);
    res.send(result);
});

app.get('/users/:userId/networks/:networkID', (req, res) => {
    const result = database.read_network_by_id(req.params.userID, req.params.networkID);
    res.send(result);
});

app.post('/users/newUser/:name', (req, res) => {
    const result = database.create_new_user(req.params.name);
    res.send(result);
})

app.post('/users/:userId/networks/newNetwork', (req,res) => {
    console.log("request body:", req.body);
    if (!req.body){
        res.send("There is no information");
    } else {
        const result = database.create_new_network(res.body, req.params.userId);
        return result;
    }
})

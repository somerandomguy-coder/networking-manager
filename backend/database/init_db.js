import {delete_database_file,  interactDatabase,  innitialize_database,create_new_user,create_new_network, read_all_networks, read_network_by_id, update_network,first_backup} from './server_db.js';

import {hard_code_data, resolve_json} from '../networkings.js'

console.log("initiating database...");
await innitialize_database();
console.log("finish initiate database");
console.log("----------------------");
console.log("create new user name Nam");
const user_obj= await create_new_user("Nam");
const lastId = user_obj.lastID;
console.log("user id is ",lastId);
console.log("finish create user");
console.log("----------------------");

console.log("create new network for user Nam");
let networkLastId = await create_new_network({
    ID: null,
    firstName: "Liam",
    lastName: "O'Connell",
    relationship: "colleague",
    BD: "03/10/1992",
    gender: "male",
    information: await JSON.stringify(["recently moved to Sydney", "expert in cloud architecture"]),
    event: await JSON.stringify([{
      detail: "Presented at AWS Summit",
      date: "05/01/2025",
      timestamp: "7/12/2025"
    },
    {
      detail: "Joined new project team",
      date: "06/25/2025",
      timestamp: "7/12/2025"
    }]),
    picURL: "static/liam.png",
    createAt: Date.now(),
    updateAt: Date.now()
}, lastId );
console.log("JSON VALUE", JSON.stringify(
["recently moved to Sydney", "expert in cloud architecture"]
), typeof JSON.stringify(
["recently moved to Sydney", "expert in cloud architecture"]
));
console.log(networkLastId.lastID);
console.log("finish create new network");

console.log("create 2nd new network for user Nam");
networkLastId = await create_new_network( resolve_json(hard_code_data[3]) , lastId );
console.log(networkLastId.lastID);
console.log("finish create new network");
console.log("----------------------");

console.log("Reading all networks...");
let result = await read_all_networks(lastId);
console.log(JSON.parse(result[1].information));
console.log("type of", typeof result);
console.log("finish read_all_network");

import { fileURLToPath } from 'node:url'
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'node:path';
import { promises as fs } from 'node:fs';

const __filename = fileURLToPath(import.meta.url); //backend/database/server_db.js
const __dirname =  path.dirname(__filename); //backend/database/
const DB_PATH = path.join(__dirname, "data","database.sqlite"); //backend/database/data/database.sqlite

//1
const delete_database_file = async () => {
    try {
        await fs.unlink(DB_PATH);
        console.log("Successfully delete the database file");
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log("There's no database file");
            return true;
        } else {
            console.log("Error deleting database file");
            throw err;
        }
    }
}

//2
//wrapper to ensure database always close
//TODO: implement those cases when the database connection will live on
const interactDatabase = async (callback_function) => {
    try {
        console.log("Opening the database");
        const db_connection = await open({
            filename: DB_PATH,
            driver:sqlite3.Database
        });
        const result = await callback_function(db_connection);
        await db_connection.close();
        console.log("Sucessfully close the database");

        if (result) {return result;}

    } catch (err) {
        if (err === "SQLITE_CANTOPEN") {
            console.log(err.message);
            const result = await callback_function(db_connection);
            await db_connection.close();
            console.log("Sucessfully close the database");

        if (result) {return result;}
        }
        else {
            throw err;
        }
    }
}

//3
const innitialize_database = async () => {
    try {
        await fs.mkdir(path.join(__dirname, "data"), { recursive: true }); //make directory if there's not

        await delete_database_file(); //delete the existing database file because we're reset the database      
        const db = new Database({
            filename: DB_PATH,
            driver:sqlite3.Database
        } );
        return interactDatabase(async (db_connection) => {
            console.log("Initializing database");
            await db_connection.exec(`
CREATE TABLE network(
    ID 			INTEGER PRIMARY KEY,
    firstName		TEXT NOT NULL,
    lastName 		TEXT,
    BD			TEXT,
    gender		TEXT,
    relationship	TEXT DEFAULT 'Stranger',
    information		TEXT,
    event		TEXT,
    picURL		TEXT,
    createAt		TEXT,
    updateAt		TEXT,
    networkerID         INTEGER,
    FOREIGN KEY (networkerID) REFERENCES networker(ID)
);

CREATE TABLE networker (
    ID		INTEGER PRIMARY KEY,
    name	TEXT
); 
`)
            console.log("Successfully initialize database");
        })
    } catch (err) {
        throw err;
    }
};

//4
const create_new_user = async (name) => {
    return interactDatabase(async (db_connection) => {
        console.log("Creating new user...");
        const stmt = await db_connection.prepare(`INSERT INTO networker(ID, name) VALUES (?,?)`);
        const result = await stmt.run(null ,name);
        await stmt.finalize();
        console.log("Successfully created new user");
        return result; //object containes the last rowid
    })
}
//5
const create_new_network = async ({ firstName, lastName, BD, gender, relationship, information, event, picURL, createAt, updateAt }, networkerID) => {
    return interactDatabase(async (db_connection) => {
        console.log("Creating new contact...");
        const stmt = await db_connection.prepare(`INSERT INTO network(ID, firstName, lastName, BD, gender, relationship, information, event, picURL, createAt, updateAt, networkerID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`);
        await stmt.run(null,"Jessie", "Hua", null, "female", "wife",null, null,null, null, null, 1);
        console.log("successfully created Jessie contact, for test");
        const result = await stmt.run(null,firstName, lastName, BD, gender, relationship, information, event, picURL, createAt, updateAt, networkerID);
        console.log("Successfully created new contact");
        await stmt.finalize();
        return result; //object contains the last rowid
    })
}

//6
//TODO: make a precompile statement get_all_network (because it often used)
const read_all_networks = async (networkerID) => {
        return interactDatabase(async (db_connection) => {
        console.log(`Getting all of neworking for user ${networkerID}`);
        const stmt = await db_connection.prepare(`SELECT * FROM network WHERE networkerID = ?`);

        const result = await stmt.all(networkerID);
        await stmt.finalize();
        console.log("Successfully get all the network");
        return result;
        })
}; 

//7
const read_network_by_id = async (networkerID, networkID) => {
    return interactDatabase(async (db_connection) => {
        console.log(`Getting network ${networkID} from user ${networkerID}`);
        const stmt = await db_connect.prepare(`SELECT * FROM network WHERE networkerID = ? AND ID = `);
        const result = await stmt.all(networkerID, networkID);
        console.log("Successfully read the network");
        return result; 
    })
}

//8
const update_network = async (networkerID, column, networkID) => {
    return interactDatabase(async (db_connection) => {
        const result = await db_connection.run(`UPDATE network SET ${column}=? WHERE networkerID = ? AND ID = ?`, networkerID, networkID);
        return result; //contains number of row changed
    });
};

//9
const first_backup = async () => {
    try {
        return true;
    } catch (err) {
        throw err;
    }
}

console.log("exporting module");
export { delete_database_file,  interactDatabase,  innitialize_database,create_new_user,create_new_network, read_all_networks, read_network_by_id, update_network,first_backup}; 




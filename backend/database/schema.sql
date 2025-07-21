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
    networkerID		INTEGER, 
    FOREIGN KEY (networkerID) REFERENCES networker(ID)		
);

CREATE TABLE networker (
    ID		INTEGER PRIMARY KEY,
    name	TEXT
); 

import mongoose from "mongoose";

// Vars
// const dbAddress = "127.0.0.1";
const dbAddress = "database";
const dbPort = 27017;
const dbName = "mongodb";
const DB_USER = "";
const DB_PASS = "";

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user:DB_USER,
    pass: DB_PASS,
    // user:process.env.DB_USER,
    // pass: process.env.DB_PASS,
    dbName: dbName,
    authSource: dbName
};

mongoose.connect(`mongodb://${dbAddress}:${dbPort}`, options)
.then(() => console.log("connected!"))
.catch(err => {
    if (err.message.indexOf("ECONNREFUSED") !== -1) {
        console.error("Error: The server was not able to reach MongoDB. Maybe it's not running?");
        process.exit(1);
    } else {
        throw err;
    }
});


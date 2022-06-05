import express from "express";
import http from "http";
import cors from "cors";
import routes from "./src/routes";
import db from "./src/db"

// Vars
const hostname = "127.0.0.1";
const port = 8080;

// Express App
const app = express();
export default app;

// CORS Config
var corsOptions = {
    origin: [
        "http://localhost:3000"
    ]
};
app.use(cors(corsOptions));

// Routes
routes(app);

// Mount Express Middleware on HTTP server
const server = http.createServer(app);
 
 // Prints a log once the server starts listening
 server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
 })
 

 
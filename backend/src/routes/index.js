
// CRUD
// Create = POST
// Read = GET
// Update = PUT
// Delete = DELETE

import test from "../models/test";

const routes = (app) => {
    app.post("/test", (req, res) => {
        let {name} = req.body;
        let result = new test({name:name});
        console.log(result);
        return res.status(200).json(result);
    });
    app.get("/", (req, res) => res.status(200).json({ message: "Welcome!" }));
}
export default routes;
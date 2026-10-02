const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
    res.send("Hello Express JS");
});

// GET /user using query
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /user using path
app.post("/user/:firstname/:lastname", (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /users using JSON body
app.post("/users", (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
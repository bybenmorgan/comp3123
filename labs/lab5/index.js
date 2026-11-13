const express = require("express");
const path = require("path");
const userRouter = require("./routes/users");

const app = express();
const port = process.env.port || 8081;

app.use(express.json());
app.use("/api/v1/user", userRouter);

// GET /home
app.get("/home", (req, res, next) => {
    res.sendFile(path.join(__dirname, "home.html"), (error) => {
        if (error) {
            next(error);
        }
    });
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(500).send("<h1>Server Error</h1>");
});

app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});

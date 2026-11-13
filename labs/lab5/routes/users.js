const express = require("express");
const user = require("../user.json");

const router = express.Router();

// GET /profile
router.get("/profile", (req, res) => {
    res.json(user);
});

// POST /login
router.post("/login", (req, res) => {
    const { username, password } = req.body || {};

    if (username !== user.username) {
        return res.json({ status: false, message: "User Name is invalid" });
    }

    if (password !== user.password) {
        return res.json({ status: false, message: "Password is invalid" });
    }

    res.json({ status: true, message: "User Is valid" });
});

// GET /logout/:username
router.get("/logout/:username", (req, res) => {
    const username = req.params.username
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;

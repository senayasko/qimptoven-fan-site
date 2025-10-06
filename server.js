const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "site1.html"));
});
app.get("/site2", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "site2.html"));
});
app.listen(3000, () => {
    console.log("Sunucu 3000 Portunda Aktif.");
});
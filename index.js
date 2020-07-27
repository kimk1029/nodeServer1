"use strict";
const express = require("express");
//   
const PORT = 3000;
const HOST = "0.0.0.0";
//
const app = express();
app.get("/", (req, res) => {
	res.send("Hello world\n");
	console.log(`Running`);
});
app.get("/main", (req, res) => {
	res.send("main\n");
	console.log(`Running`);
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

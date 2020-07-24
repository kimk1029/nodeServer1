"use strict";
const express = require("express");
//   
const PORT = 3000;
const HOST = "121.133.149.191";
//
const app = express();
app.get("/", (req, res) => {
	res.send("Hello world\n");
	console.log(`Running`);
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

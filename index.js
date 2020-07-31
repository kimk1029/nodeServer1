"use strict";
const express = require("express");
const mdbConn = require("./mariaDBConn.js");
const bodyParser = require("body-parser");

const cors = require("cors");

//   
const PORT = 3000;
const HOST = "localhost";
//
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
// 	res.header("Access-Control-Max-Age", 3600);
// 	next();
// });
mdbConn
	.getUserList()
	.then((rows) => {
		console.log(rows);
	})
	.catch((errMsg) => {
		console.log("errMsg");
		console.log(errMsg);
	});

let users = [
	{ id: 1, name: "Hyun" },
	{ id: 2, name: "H1yun" },
	{ id: 3, name: "Hy2un" },
	{ id: 4, name: "Hy3un" },
	{ id: 5, name: "Hy4un" },
];
app.get("/", (req, res) => {
	res.send("Hello world\n");
	console.log(`Running`);
});
app.get("/main", (req, res) => {
	res.send("main\n");
	console.log(`Running`);
});
app.get("/users", (req, res) => {
	console.log("getUSER!!!");
	mdbConn.getUserList().then((rows) => {
		rows = rows.reverse();
		res.send(rows);
	});
});
app.post("/users", (req, res) => {
	console.log(req.body);
	const { name, content } = req.body;
	mdbConn.insertUser({ name, content });
	res.send("100");
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

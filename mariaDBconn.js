const mariadb = require("mariadb");

const pool = mariadb.createPool({
	host: "121.133.149.191",
	port: 3306,
	user: "kimk1029",
	password: "QWEqwe!@#123",
	connectionLimit: 5,
});

async function GetUserList() {
	const conn = await pool.getConnection();
	conn.query("USE newnodeapp");
	try {
		rows = await conn.query("SELECT * FROM user");
		console.log("[[[[[[[[connect]]");
	} catch (err) {
		console.log("----?>err");
		console.log(err);
		throw err;
	} finally {
		if (conn) conn.end();
		console.log("-----");
		return rows;
	}
}
async function InsertUser(params) {
	const conn = await pool.getConnection();
	conn.query("USE newnodeapp");
	try {
		const nowDate = new Date();
		const nowDate_format =
			nowDate.getFullYear() +
			"-" +
			(nowDate.getMonth() + 1) +
			"-" +
			nowDate.getDate();
		rows = await conn.query(
			`INSERT INTO user (name, content, date) VALUES('${params.name}','${params.content}','${nowDate_format}')`
		);
		console.log("[[[[[[[[connect]]");
	} catch (err) {
		console.log(err);
		throw err;
	} finally {
		if (conn) conn.end();
		return rows;
	}
}

module.exports = {
	getUserList: GetUserList,
	insertUser: InsertUser,
};

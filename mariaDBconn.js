const mariadb = require("mariadb");

const pool = mariadb.createPool({
	host: "121.133.149.191",
	port: 3306,
	user: "kimk1029",
	password: "QWEqwe!@#123",
	connectionLimit: 5,
});

async function GetUserList() {
	let conn, rows;
	try {
		conn = await pool.getConnection();
		conn.query("USE newnodeapp");
		rows = await conn.query("SELECT * FROM user");
	} catch (err) {
		console.log("----?>err");
		console.log(err);
		throw err;
	} finally {
		if (conn) conn.end();
		console.log("-----");
		console.log(rows);
		return rows;
	}
}

module.exports = {
	getUserList: GetUserList,
};

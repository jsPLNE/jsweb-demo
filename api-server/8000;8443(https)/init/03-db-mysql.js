var mysql = require("mysql");
var db;
var jw = null;

function make_mysql_connection () {
    db = mysql.createPool({
        host		: 'localhost',
        port		: 3306,
        user		: 'user',
        password	: 'password',
        database	: 'database',
        dateStrings	: true,
	    multipleStatements : true,
    });
    return db;
};

module.exports = function (_jw) {
    jw = _jw;
    if (!jw.db) { jw.db = {}; };
    jw.db.mysql = make_mysql_connection();
}


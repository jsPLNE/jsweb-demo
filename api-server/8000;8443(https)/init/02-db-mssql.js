var jw;
var mssql = require('mssql');
var fs = require('fs');
var config = {
    type     : "mysql",
    user     : "username",
    password : "password",
    server   : "127.0.0.1",
    database : "database",
    port     : 1433
};

function MSSql() {
    this.connection = new mssql.Connection(config, function (err) {
        console.error(err);
    }.bind(this));
    this.connection.on('error', function (err) {
        console.error(err);
    }.bind(this));
};
MSSql.prototype.query = function (sql, param, callback) {
    var request = new mssql.Request(this.connection);
    // or: var request = connection.request();
    // console.log("SQL = ", sql);
    request.multiple = true;
    request.on('error', function (err) {
        console.log("DB_MSSQL.query", sql, err);
        if (callback) { callback(err); }
    }.bind(this));
    request.query(sql, function (err, recordsets) {
        if (callback) { callback(err, recordsets); }
    }.bind(this));
};

module.exports = function (_jw) {
    jw = _jw;
    if (!jw.db) { jw.db = {};};
    jw.db.mssql = new MSSql();
}


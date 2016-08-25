module.exports = function stat(req, res, next) {
    var db = req.jw.db.pg;
    if (req.query.brand && req.query.model) {
	    db.connect(function (err, client, done) {
	        if (err) {
                console.log(err);
                res.status(500).end();
                return;
            }
	        var sql = ' select * from some_table where f1=$1 and f2 = $2); ';
	        var param = ['1', 2];
	        client.query(sql, param, function (err, result) {
                done();
		        if (err) {
                    console.log(err);
		            res.status(500).end(JSON.stringify(err));
		        } else {
                    res.end(JSON.stringify(result.rows));
		        }
	        });
	    });
    } else {
	    res.status(400).end();
    }
};

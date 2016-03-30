var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'mt4_user',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'mt4_order_manager'
  });
/*
exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};
*/

/* GET users listing. */
//router.get('/:userId/:symbol/:period/:magicNo/:decitionTime/:action', function(req, res, next) {
router.get('/:userId', function(req, res, next) {
    pool.getConnection(function(err, connection) {
            if (err) return next(err);

            connection.query(
                    'select * from order_status where user_id = ?',
                    [req.params.userId],
                    function (err, rows) {
                        if (err) return next(err);

                        for(var i = 0; i < rows.length; i++) {
                            var userId = rows[i].user_id;
                        }
                        console.info("query.");
                        connection.release();
                        //res.render('users', { title: 'Express Users', users: rows });
                        res.send('user id is ' + req.params.userId + ' count=' + rows.length);
                    }
                );
        });
//    console.info("send.");
//    res.send('user id is ' + req.params.userId);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

    const sql = require("../db.js");


    sql.query("SELECT userid FROM users WHERE tel='"+req.param('tel')+"' AND pass='"+req.param("pass")+"'",function (err, result, fields) {
        if (err) throw err;
let ress=result[0];
        console.log(ress.userid);

        if (ress.userid){getlist(ress.userid)}
    });

function getlist(referance) {
    sql.query("SELECT * FROM users WHERE ref='"+referance+"'",function (err,rows) {
        if (err) throw err;
        console.log(rows);

        res.send(rows);
    });

}


});

module.exports = router;

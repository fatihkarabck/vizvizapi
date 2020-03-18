var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

  const sql = require("../db.js");


  sql.query("SELECT COUNT(*) AS sayi FROM users WHERE ref='"+req.param('ref')+"'",function (err,rows) {
    if (err) throw err;
    console.log(rows);

    res.send(rows[0]);
  });




});

module.exports = router;

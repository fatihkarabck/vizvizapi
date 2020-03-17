var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  const sql = require("../db.js");




    sql.query("INSERT INTO users SET name='"+req.param('name')+"',email='"+req.param('email')+"',tel='"+req.param('tel')+"',pass='"+req.param('pass')+"',plaka='"+req.param('plaka')+"',type='"+req.param('type')+"'");



  res.render('index', { title: 'Express' });
});

module.exports = router;

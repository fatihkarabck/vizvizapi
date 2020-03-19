var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

    const sql = require("../db.js");

    let refs;
    sql.query("SELECT userid FROM users WHERE tel='"+req.param('tel')+"' AND pass='"+req.param("pass")+"'",function (err, result, fields) {
        if (err) throw err;

             refs = result[0];
            console.log(refs);
        if (refs) {
            console.log(refs.userid);

            if (parseInt(refs.userid) > 0) {
                getlist(refs.userid)
            } else {
                res.send("0");
            }
        }else{res.send("KULLANICI BULUNAMADI LÜTFEN GİRİŞ YAPINIZ");}
    });

function getlist(referance) {
    console.log("önce"+referance);
    sql.query("SELECT * FROM users WHERE ref='"+referance+"'",function (err,rows) {

        console.log("sonra"+rows);
if (rows[0]){
    console.log("dolu");res.send(rows[0]);}else{ console.log("boş"+refs.userid);res.send(refs.userid+""); }
    });

}


});

module.exports = router;

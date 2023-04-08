var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = bodyParser.urlencoded({ extended: false });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "******",
  database: "test_db",
});
router.use(express.urlencoded({extended: false}))

app.post('/submit', (req, res) => {
  const htmlData = req.body.htmldata;
  const id = req.body.id;
  const sql = 'INSERT INTO html_data (null,id,html_data) VALUES (id,id_f,html_data);'


  db.query(sql, htmlData, (err, result) => {
    if (err) throw err;
    return res.send({ state: 0, message: err });
    // console.log('插入数据库成功');
    return res.send({ state: 1, message: '插入数据库成功' });
  });
});


app.post('/update', (req, res) => {
  const htmlData = req.body.htmldata;
  const id = req.body.id;
  const sql = 'UPDATE html_data set html_data = htmldata WHERE id_f = id;'


  db.query(sql, htmlData, (err, result) => {
    if (err) throw err
    return res.send({ state: 0, message: err });
    // console.log('更新成功');
    return res.send({ state: 1, message: '更新成功' });
  });
});

module.exports = router;
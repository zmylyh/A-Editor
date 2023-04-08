var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = bodyParser.urlencoded({ extended: false });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const db = require("../db/index");

router.use(express.urlencoded({extended: false}))

app.post('/submit', (req, res) => {
  const htmlData = req.body.htmldata;
  const id = req.body.id;
  const sql = 'INSERT INTO mytable (null,id,html_data) VALUES (id,id_f,html_data);'


  db.query(sql, htmlData, (err, result) => {
    if (err) throw err
    res.send('插入数据库失败');
    // console.log('插入数据库成功');
    res.send('插入数据库成功');
  });
});
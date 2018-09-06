var express = require('express')
var bodyParser = require('body-parser')
var rn = require('random-number');
var mysql = require('mysql')
var app = express()
var connection = mysql.createConnection({
  host : 'localhost',
  port : '3306',
  user : 'root',
  password : 'Choi6459@@',
  database : 'gddb'
})
app.listen(3010, function(){
  console.log("start! DAEUN server on 3010")
})
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
  var gen = rn.generator({
    min:  1
  , max:  200
  , integer: true
  })
res.send('<h1>행운의 당첨 번호는</h1></br><h1>'+gen()+'</h1>')
})
app.get('/insta',function(req,res){
  var searchQuery = connection.query('select * from user',function(err,rows){
      if(err)
      {
        console.log(err)
        res.json({"status":"error"})
      }
      else {
      console.log(rows.length)
      var gen = rn.generator({
        min:  0
      , max:  rows.length-1
      , integer: true
      })
      res.send('<h1>행운의 당첨 아이디는</h1></br><h1>'+rows[gen()].id+'</h1>')

      }
    })

})

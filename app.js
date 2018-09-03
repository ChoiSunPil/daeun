var express = require('express')
var bodyParser = require('body-parser')
var rn = require('random-number');
var app = express()
app.listen(3010, function(){
  console.log("start! DAEUN server on 3010")
})
var gen = rn.generator({
  min:  1
, max:  200
, integer: true
})
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
res.send('<h1>행운의 당첨 번호는</h1></br><h1>'+gen()+'</h1>')
})

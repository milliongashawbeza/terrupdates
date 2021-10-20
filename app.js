const Addition = require('./Addition') 
const express = require('express')
const request = require('request')
const app = express()

app.set('view engine','jade');
app.get('/',function(req,res){
    res.send('Hello world ')
})
//Route Example 
app.get('/books',function(req,res){
    res.render('index',{title:"love is great "})
})
request("http://localhost:3000/books/",function(error,response,body)
{
console.log(body);
});
var server = app.listen(3000,function(){})
console.log(Addition.AddNumber(6,6)) 
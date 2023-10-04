const express = reqire('express');
const http = require('http');
const fs = require('fs');
const app = express();
const Port = 3000;
const mysql = require('mysql');
const urlencodedParcer = express.urlencodedParcer({extended:false});
import connection from './connection';
const connect = mysql.createConnection({
    connection
})
app.listen(Port, (error)=>{
    error ? console.error('error to connect') : console.log(`listening port: ${Port}`);

});
app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('index');
})
app.get('/userPage', (req,res)=>{
    res.render('userPage');
})
app.get('/userPage/login', (req, res)=>{
    res.render('login');
})
app.post('/userPage/login', urlencodedParcer ,(req, res)=>{
    res.end;
})

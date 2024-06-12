//import { UserParams } from "./algotithm.js";
const express = require("express");
const http = require("http");
const fs = require("fs");
const app = express();
const Port = 3000;
const mysql = require("mysql");
const bodyParser = require("body-parser");
const urlencondedParcer = express.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
app.use(express.static(`${__dirname}/views`));
// import connection from './connection.js';
const connection = mysql.createConnection({
  host: "localhost",
  database: "fitnesdb",
  user: "siteFindigBase",
  password: "humansedrexstep",
  port: "3306",
});
app.listen(Port, (error) => {
  error
    ? console.error("error to connect")
    : console.log(`listening port: ${Port}`);
});
app.set("view engine", "ejs");
connection.connect(function (err) {
  if (err) {
    return console.log("blya pizdec");
  } else {
    console.log("ne pizdec");
  }
});
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/userPage", (req, res) => {
  res.render("userPage");
});
app.get("/userParams", (req, res) => {
  let user1 = new UserParams(90, 180, 22, [1, 1]);
  user1.GetIMT();
  user1.GetParams();
  res.render("userPage");
});
app.get("/userPage/login", (req, res) => {
  res.render("login");
});
app.get("/regPage", (req, res) => {
  res.render("regPage");
});
app.get("/loginPage", (req, res)=>{
  res.render("login")
})
app.post(
  "/registrationPage/registrationSucces",
  urlencondedParcer,
  (req, res) => {
    let registrateNew = `INSERT INTO user (username, password) VALUES ( '${req.body.username}', '${req.body.password}')`;
    let addInfo = `INSERT INTO userinfo(age, tall, username) VALUES ( '${req.body.age}', '${req.body.tall}', '${req.body.username}')`;
    
    connection.query(registrateNew, (err, result) => {
      console.log(err);
      console.log("added user name =", req.body.login);
    });
    connection.query(addInfo, (err, result) => {
      console.log(err);
    });
    res.redirect("/");
  }
);
app.get("/choosingPage", (req, res) => {
  res.render("choosingPage");
}); 

app.post("/login/loginSucces", urlencondedParcer, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  // connection.connect(function (err) {
  //   if (err) {
  //     return console.log("blya pizdec");
  //   } else {
  //     console.log("ne pizdec");
  //   }
  // });
  let select = `SELECT password FROM user WHERE username = '${req.body.username}'`;
  connection.query(select, (err, result) => {
    console.log(err, 'error is');
    if(err){
      res.redirect('/loginPage')
    } else{
      if(result[0] == undefined || result[0] == null){
        res.render("login"); 
      }else{
      // console.log(typeof result[0].password);
      if (result[0].password == `${req.body.password}`) {
        res.redirect("/");
        res.end()
      } else {
        res.render("login"); 
        // res.end();
      }
    }
    }
    // console.log("/////////", result[0]);
});
});
app.post("/login/saveLogin", jsonParser, (req, res) => {
  let selectMore = `SELECT password, id FROM user WHERE username = '${req.body.username}'`;
  connection.query(selectMore, (err, result) => {
    if (result[0].password == undefined ){
      console.log('zero')
      res.end()
    }else{
    console.log("its login res", req.body);
    if (result[0].password == req.body.password) {
      let obj = new Object();
      obj.username = req.body.username;
      console.log(result[0])
      let id = result[0].id;
      let selectData = `SELECT Age, tall, weightBase FROM userinfo WHERE username = '${req.body.username}'`;
      connection.query(selectData, (err, result)=>{
      console.log(result, 'new result')
      obj.Age = result[0].Age;
      obj.tall = result[0].tall;
      obj.weightBase = result[0].weightBase;  
      console.log('obj', obj)
      res.send(JSON.stringify(obj));
    })   
    } else {
      console.log("error", result);
      res.end;
    }
    
  }
  });
});
app.post("/saveWeight", jsonParser, (req, res)=>{
  // const regExp = /\*|%|#|&|\$/g;
  // console.log(phoneNumber.replace(regExp, ''))
  // console.log(req.body[1].replace('\\',''))
  console.log(req.body, 'reqbody')
  let weightString = req.body[1].replace( /"{/g, "{")
  weightString = weightString.replace(/}"/g, '}')
  console.log('weightString', weightString)
  let sendWeight = `UPDATE userinfo SET weightBase = '${weightString}' WHERE username = '${req.body[0].username}'`
  connection.query(sendWeight, (err, result)=>{
    console.log(result, 'incertResult')
    res.end;
  })
})
app.post("/getWeight", jsonParser, (req, res)=>{

})

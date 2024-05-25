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
  database: "fitnes",
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
app.post("/userPage/login", urlencondedParcer, (req, res) => {
  res.end;
});
app.post("/regPage/registrationSucces", (req, res) => {
  let registrateNew = `INSERT INTO user (username, password, e-mail) VALUES ( '${req.body.login}', '${req.body.password}', '${req.body.email}' )`;
  let addInfo = `INSERT INTO userinfo(fullname, birthdate,	e-mail,	sex,	tall,	weightBase) VALUES ( '${req.body.fullname}', '${req.body.birthdate}', '${req.body.e-mail}', '${req.body.sex}', '${req.body.tall}', '${req.body.weightBase}' )`;
  connection.connect(function (err) {
    if (err) {
      return console.log("blya pizdec");
    } else {
      console.log("ne pizdec");
    }
  });
  connection.query(registrateNew, (err, result) => {
    console.log(err);
    console.log("added user name =", req.body.login);
  });
  connection.query(addInfo, (err, result)=>{
    console.log(err);
  })
  res.redirect("/firstPage");
});
app.post("/login/saveLogin", jsonParser, (req, res) => {
  let selectMore = `SELECT password FROM user WHERE login = '${req.body.login}'`;
  connection.connect(function (err) {
    if (err) {
      return console.log("blya pizdec");
    } else {
      console.log("ne pizdec");
    }
  });
  connection.query(selectMore, (err, result) => {
    console.log(err);
    console.log(req.body);
    console.log("its login res", req.body);
    console.log(req.body.password);
    if (result[0].password == req.body.password) {
      console.log("sending login", req.body.login);
      let obj = new Object();
      obj.login = req.body.login;
      res.send(JSON.stringify(obj));
    } else {
      console.log("error", result);
      res.end;
    }
  });
});
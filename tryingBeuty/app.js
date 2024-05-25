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
const connect = mysql.createConnection({
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

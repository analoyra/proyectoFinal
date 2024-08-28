var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
require("dotenv").config();
var fileUpload = require ('express-fileupload');
var cors = require ('cors');
var apiRouter = require ('./routes/api');

const nodemailer = require('nodemailer');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var articulosRouter = require("./routes/admin/articulos");
var loginRouter = require("./routes/admin/login");


var app = express();

// Configuración del motor de vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "89345r983475938",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(fileUpload({
  useTempFiles: true,   
  tempFileDir: '/tmp/'  
}));

const secured = async (req, res, next) => {
  try {
    if (req.session.username) {
      console.log("User is authenticated:", req.session.username);
      next();
    } else {
      console.log("User is not authenticated, redirecting to login");
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.error("Error in secured middleware:", error);
    res.redirect("/admin/login");
  }
};

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin/login", loginRouter);
app.use("/admin/articulos", secured, articulosRouter);
app.use ('/api', cors(), apiRouter);
app.use("/admin/login", loginRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

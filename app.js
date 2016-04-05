var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechatOauth = require("wechat-oauth");
var yaml = require("js-yaml");
var fs = require("fs");
var session = require("express-session");
var mongoose = require("mongoose");

var routes = require('./server/routes/index');
var wechat = require("./server/routes/wechat");
var cr = require("./server/routes/cr");
var admin = require("./server/routes/admin");
var stat = require("./server/routes/stat");

var SsiErros = require("./server/errors");
var logger = require("./server/log").getLogger("app");
var PicStream = require("./server/models/pictureStream");
var present = require("./server/middlewares/presentation");

var app = express();

try{
    var conf = yaml.safeLoad(fs.readFileSync("./configs/config.yaml", "utf-8"));
    app.set("conf", conf);
    app.set("wechat-oauth", new wechatOauth(conf.app.id, conf.app.secret));
    app.set("picStream", new PicStream(conf.file.image));
    mongoose.connect(conf.database.url);
    var client = new wechatOauth(conf.app.id, conf.app.secret);
    app.set("wechat-oauth", client);
    //console.log(client.getAuthorizeURL("http://www.ripplemaster.cn:3001/", "", "snsapi_base"));
}catch(error){
    logger.log("error", "configuration load error " + error.message);
    process.exit(-1);
}

// view engine setup
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', "jade");
/*
app.engine('js', require("express-react-views").createEngine({
    beautify : true,
    babel : {
        presets : ['react', 'es2015']
    }
}));
*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret : "aflodit secret"
}));

app.use('/', routes);
app.use("/admin", admin);
app.use("/cr", cr);
app.use('/wechat', wechat);
app.use("/stat", stat);

app.use(present.present);
app.use(present.presentError);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

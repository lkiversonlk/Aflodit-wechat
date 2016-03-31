var express = require('express');
var router = express.Router();
var openId = require("../middlewares/openId");

var Dao = require("../dao");
var dao = new Dao();

//router.use(openId);

router.get('/', function(req, res, next) {
  res.render('index',
      {
        title : "=Beauty情报="
      }
  );
});

router.get("/image/random", function(req, res, next){
    dao.nextRandomImage(function(err, image){
        if(err){
            return next(err);
        }else{
            req.result = image.file_id;
            return next();
        }
    });
});

module.exports = router;

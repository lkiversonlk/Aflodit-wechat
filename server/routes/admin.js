/**
 * Created by jerry on 3/30/16.
 */
var express = require('express');
var router = express.Router();
var openId = require("../middlewares/openId");

var Dao = require("../dao");
var dao = new Dao();

//router.use(openId);

router.get('/', function(req, res, next) {
    res.render('admin',
        {
            title: '情报审核'
        }
    );
});

router.get("/unaudit", function(req, res, next){
    dao.nextUnAuditImage(function(err, image){
        if(err){
            return next(err);
        }else{
            req.result = image.file_id;
            return next();
        }
    });
});

router.post("/image/:id", function(req, res, next){
    req.result = "OK";
    dao.update("image", {file_id : req.params.id}, {status : req.body.level}, function(err, result){
        if(err){
            return next(err);
        }else{
            req.result = result;
            return next();
        }
    });

});

module.exports = router;
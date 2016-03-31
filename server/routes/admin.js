/**
 * Created by jerry on 3/30/16.
 */
var express = require('express');
var router = express.Router();
var openId = require("../middlewares/openId");

var imageDao = require("../dao/imageDao");

//router.use(openId);

router.get('/', function(req, res, next) {
    res.render('admin',
        {
            title: '情报审核'
        }
    );
});

router.get("/random", function(req, res, next){
    imageDao.nextImage(function(err, image){
        if(err){
            return next(err);
        }else{
            req.result = image.file_id;
            return next();
        }
    });
});

module.exports = router;
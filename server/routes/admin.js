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
            title: '=个人面板='
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

/**
 * 审核图片接口
 */
router.post("/audit/image/:id", function(req, res, next){
    dao.update("image", {file_id : req.params.id}, {status : req.body.level}, function(err, result){
        if(err){
            return next(err);
        }else{
            req.result = result;
            return next();
        }
    });

});

/**
 * 审核图片界面
 */
router.get("/audit", function(req, res, next){
    return res.render("admin-audit", {
        title : "=情报审核="
    });
});

router.get("/help", function(req, res){
    return res.render("admin-help", {
       title : "=资讯大厅="
    });
});

router.post("/help", function(req, res, next){
    var comment = req.body.comment;
    dao.create(
        "comment",
        {
            user : "unknown",
            comment : comment,
            time : Date.now()
        },
        function(error, result){
            if(error){
                return next(error);
            }else{
                res.redirect("/admin");
            }
        }
    );
});

router.get("/my", function(req, res){
    return res.render("admin-my", {
       title : "=我的情报="
    });
});

module.exports = router;
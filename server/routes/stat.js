/**
 * Created by jerry on 4/3/16.
 */

var express = require("express"),
    router = express.Router();

var Dao = require("../dao");
var dao = new Dao();


/**
 * Collect user data about image
 */
router.post("/image/:id", function(req, res, next){
    dao.create(
        "stat",
        {
            user : "unknown",
            time : Date.now(),
            stay : req.body.stay,
            prefer : req.body.prefer,
            type : req.body.type,
            image : req.params.id
        },
        function(err, result){
            if(err){
                return next(err);
            }else{
                req.result = "OK";
                return next();
            }
        }
    );
});

module.exports = router;
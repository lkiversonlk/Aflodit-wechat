/**
 * Created by jerry on 3/30/16.
 */

var express = require("express"),
    router = express.Router();
var logger = require("../log").getLogger("routers.cr");
var param = require("../middlewares/param");
var restify = require("../middlewares/restify");
var models = require("../models");
var SsiError = require("../errors");

router.use(param);

Object.keys(models).forEach(function(model){
    var modelRestify = new restify(model);
    var mongooseModel = models[model];

    modelRestify.registerCreate(function(req, res, next){
        new mongooseModel(req.parameters.data).save(function(err, result){
            if(err){
                logger.log("debug", "mongoose error [" + error.name + " " + error.toString() + "]");
                return next(SsiError.DBOperationError(error.message));
            }else{
                req.result = result;
                return next();
            }
        });
    });

    modelRestify.registerSearch(function(req, res, next){
        var query = mongooseModel.find(req.parameters.query);
        if(req.parameters.select){
            query.select(req.parameters.select.join(" "));
        }
        query.exec(function(err, result){
            if(err){
                logger.log("debug", "mongoose error [" + error.name + " " + error.toString() + "]");
                return next(SsiError.DBOperationError(error.message));
            }else{
                req.result = result;
                return next();
            }
        });
    });

    modelRestify.registerUpdateById(function(req, res, next){
        req.parameters.query._id = req.params.id;
        mongooseModel.update(req.parameters.query, req.parameters.data, function(err, result){
            if(err){
                logger.log("debug", "mongoose error [" + error.name + " " + error.toString() + "]");
                return next(SsiError.DBOperationError(error.message));
            }else{
                req.result = result;
                return next();
            }
        });
    });

    modelRestify.serve(router);
});

var pictureRestify = new restify("pic");
pictureRestify.registerSearchById(function(req, res, next){
    var id = req.params.id;
    req.app.get("picStream").picturePath(id, function(error, path){
        if(error){
            return next(error);
        }else{
            return res.sendFile(path, function(error){
                if(error){
                    logger.log("error", "image with id " + id + " has error " + error.message);
                    return res.status(404).end();
                }
            });
        }
    });
});

pictureRestify.serve(router);

module.exports = router;
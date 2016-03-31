/**
 * Created by jerry on 3/8/16.
 */

var jsen = require("jsen");
var SsiErrors = require("../errors");
var logger = require("../log").getLogger("middlewares.params");

var restDataSchema = {
    "type" : "object",
    "properties" : {
        "select" : {
            "type" : ["array", "null"],
            "items" : {
                "type" : "string"
            }
        },
        "query" : {
            "type" : ["object", "null"]
        }
    }
};

var validate = jsen(restDataSchema);

function _extract(req){
    var query = req.query;
    return {
        select : (query.select === undefined ? null : JSON.parse(query.select)),
        query : (query.query === undefined ? null : JSON.parse(query.query)),
        data : req.body
    };
}

var parameters = function (req, res, next){
    var data = null;
    /*
    if(!req.headers['content-type'] || req.headers['content-type'].toLowerCase() != "application/json"){
        logger.log("debug", "content-type not exist or not valid");
        return next(SsiErrors.ContentTypeInvalidError());
    }*/
    try{
        data = _extract(req);
    }catch (error){
        logger.log("debug", "parameter parsing exception:" + error.name + " " + error.message);
        return next(SsiErrors.ParameterInvalidError("rest parameter parsing error"));
    }
    if(validate(data)){
        req.parameters = data;
        next();
    }else{
        logger.log("debug", "parameter not restful " + JSON.stringify(validate.errors));
        return next(SsiErrors.ParameterInvalidError("rest parameter parsing error"));
    }
};

module.exports = parameters;
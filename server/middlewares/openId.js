/**
 * Created by jerry on 3/30/16.
 */
var SsiErrors = require("../errors");
var logger = require("../log").getLogger("middlewares.openId");

function openId(req, res, next){
    if(req.session.openid){
        //has openid already, no needs to fetch openid
        return next();
    }else if(req.query.code){
        var client = req.app.get("wechat-oauth");
        client.getAccessToken(req.query.code, function(err, result){
            if(err){
                logger.log("error", err);
                return next(SsiErrors.ServerError());
            }else{
                req.session.openid = result.data.openid;
                return next();
            }
        });
    }else{
        next(SsiErrors.NotInWechatError());
    }
}

module.exports = openId;
/**
 * Created by jerry on 4/5/16.
 */
var SsiErrors = require("../errors");
var logger = require("../log").getLogger("middlewares.userInfo");
var Dao = require("../dao");
var dao = new Dao();

function getUser(req, res, next){
    var userId = req.session.openid;
    dao.find("user", {userId : userId}, function(err, users){
        if(err){
            next(err);
        }else{
            if(users.length == 0){
                dao.create("user", {
                        userId : userId,
                        creation : Date.now(),
                        level : 0
                    },
                    function(error, user){
                        if(error){
                            return next(error);
                        }else{
                            req.user = user;
                            return next();
                        }
                    });
            }else{
                req.user = users[0];
                return next();
            }
        }
    });
}

module.exports = getUser;
/**
 * Created by jerry on 3/27/16.
 */

var express = require("express"),
    router = express.Router();
var crypto = require("crypto");
var token = "aflodit";

var checkSignature = function (query, token) {
    var signature = query.signature;
    var timestamp = query.timestamp;
    var nonce = query.nonce;

    var shasum = crypto.createHash('sha1');
    var arr = [token, timestamp, nonce].sort();
    shasum.update(arr.join(''));

    return shasum.digest('hex') === signature;
};

router.get("/", function(req, res, next){
    if(checkSignature(req.query, token)){
        res.end(req.query.echostr);
    }else{
        res.send(401);
    }
});

module.exports = router;
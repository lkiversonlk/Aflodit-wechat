/**
 * Created by jerry on 4/1/16.
 */
var express = require("express"),
    router = express.Router();
var async = require("async");
var request = require("request");
var logger = require("../log").getLogger("routes.bid");

function auction(messages){
    if(messages.length == 0){
        return null;
    }else{
        return messages[0];
    }
}

router.get("/:user", function(req, res, next){
    var bidders = req.app.get("conf").app.bidders;
    var finished = false;
    var user = req.params.user;

    var messages = [];
    var failed = 0;
    async.each(
        bidders,
        function(bidder, callback) {
            request.get(bidder, function (error, response) {
                if (error) {
                    logger.log("info", "bidder " + bidder + " has encountered error: " + error.message);
                    failed++;
                    return callback()
                } else {
                    if (!finished) {
                        var message = JSON.parse(response.body);
                        messages.push(message);
                        if (messages.length == (bidders.length - failed)) {
                            finished = true;

                            //hold election and find the winner
                            var winner = auction(messages);
                            /**
                             * {
                         *    Result :
                         *    ImageId :
                         * }
                             */
                            req.result = winner ? winner.ImageId : "";
                            return next();
                        }
                    } else {
                        logger.log("info", "bidder " + bidder + " returned but too late");
                    }
                    return callback();
                }
            });
        });

    setTimeout(function(){
        if(finished){
            return
        }else {
            finished = true;
            var winner = auction(messages);

            res.result = winner ? winner.ImageId : "";
            return next();
        }
    }, 2000);
});

module.exports = router;

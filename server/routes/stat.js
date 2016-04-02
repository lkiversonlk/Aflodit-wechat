/**
 * Created by jerry on 4/3/16.
 */

var express = require("express"),
    router = express.Router();

/**
 * Collect user data about image
 */
router.post("/image/:id", function(req, res, next){
    req.result = req.body;
    console.log(req.result);
    return next();
});

module.exports = router;
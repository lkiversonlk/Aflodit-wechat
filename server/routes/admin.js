/**
 * Created by jerry on 3/30/16.
 */
var express = require('express');
var router = express.Router();
var openId = require("../middlewares/openId");

//router.use(openId);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
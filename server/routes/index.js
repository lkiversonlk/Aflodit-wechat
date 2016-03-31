var express = require('express');
var router = express.Router();
var openId = require("../middlewares/openId");

//router.use(openId);

router.get('/', function(req, res, next) {
  res.render('index',
      {
        title : "express react",
        name: 'Express'
      }
  );
});

module.exports = router;

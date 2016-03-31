/**
 * Created by jerry on 3/31/16.
 */

var mongoose = require("mongoose");
var image = require("../models").image;

function ImageDao(){

};

/**
 * return the next un auditted image
 * @param callback
 */
ImageDao.prototype.nextImage = function(callback){
    image.count().exec(function(err, count){
        if(err){
            return callback(err);
        }else{
            var random = Math.floor(Math.random() * count);
            return image.findOne().skip(random).exec(callback);
        }
    })
};

module.exports = new ImageDao();
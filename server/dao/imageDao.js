/**
 * Created by jerry on 3/31/16.
 */

var mongoose = require("mongoose");


function ImageDao(){

};

/**
 * return the next un auditted image
 * @param callback
 */
ImageDao.prototype.nextImage = function(callback){
    image.findOne(
        {
            status : 0
        }
    ).select("file_id").exec(callback);
};

module.exports = new ImageDao();
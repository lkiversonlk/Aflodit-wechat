/**
 * Created by jerry on 3/28/16.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    file_name : {
        type : String
    },
    get_time : {
        type : Number
    },
    file_id : {
        type : String
    },
    status : {
        type : Number
    },
    img_url : {
        type : String
    },
    web_info : {
        type : String
    },
    page_url : {
        type : String
    },
    source : {
        type : String
    }
});

var image = mongoose.model("image", imageSchema);

module.exports = image;
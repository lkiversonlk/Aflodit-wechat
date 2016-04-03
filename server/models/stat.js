/**
 * Created by jerry on 3/30/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var statSchema = new Schema({
    user : {
        type : String
    },
    prefer : {
        type : String
    },
    stay : {
        type : String
    },
    type : {
        type : String
    },
    time : {
        type : Number
    },
    image : {
        type : String
    }
});

var stat = mongoose.model("stat", statSchema);

module.exports = stat;
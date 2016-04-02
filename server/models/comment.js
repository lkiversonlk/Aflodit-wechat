/**
 * Created by jerry on 4/2/16.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    user : {
        type : String
    },

    comment : {
        type : String,
        required : true
    },

    time : {
        type : Number,
        required : true
    }
});

var comment = mongoose.model("comment", commentSchema);

module.exports = comment;
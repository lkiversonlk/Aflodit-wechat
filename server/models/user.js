/**
 * Created by jerry on 3/30/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    creation : {
        type : Number
    },
    level : {
        type : Number
    }
});

var user = mongoose.model("user", userSchema);

module.exports = user;
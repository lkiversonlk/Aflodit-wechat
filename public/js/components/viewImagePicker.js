/**
 * Created by jerry on 3/31/16.
 */

function Picker(){

};

Picker.prototype.getImageId = function(callback){
    this.request = $.get("/bid/" + userId, function(result){
        if(result.code == 0){
            return callback(null, result.data);
        }else{
            return callback("fail");
        }
    });
};

Picker.prototype.getImagePath = function(imageId){
    if(imageId == null){
        return "";
    }
    return "/cr/pic/" + imageId;
};

module.exports = Picker;
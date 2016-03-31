function RandomImagePicker(){

};

RandomImagePicker.prototype.getImageId = function(callback){
    this.request = $.get("/admin/random", function(result){
        if(result.code == 0){
            return callback(null, result.data);
        }else{
            return callback("fail");
        }
    });
};

RandomImagePicker.prototype.getImagePath = function(imageId){
    return "/cr/pic/" + imageId;
};

module.exports = RandomImagePicker;
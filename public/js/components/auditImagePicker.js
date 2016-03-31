function Picker(){

};

Picker.prototype.getImageId = function(callback){
    this.request = $.get("/admin/unaudit", function(result){
        if(result.code == 0){
            return callback(null, result.data);
        }else{
            return callback("fail");
        }
    });
};

Picker.prototype.getImagePath = function(imageId){
    return "/cr/pic/" + imageId;
};

Picker.prototype.judgeImage = function(imageId, level, callback){
    $.post(
        "/admin/image/" + imageId,
        {
            level : level
        },
        function(data){
            callback(null, data);
        }
    );
}

module.exports = Picker;
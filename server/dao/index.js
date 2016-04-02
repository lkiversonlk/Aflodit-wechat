/**
 * Created by jerry on 3/31/16.
 */


var models = require("../models");

function Dao(){

}

Dao.prototype.nextUnAuditImage = function(callback){
    models.image.count(
        {
            status : 0
        }
    ).exec(function(err, count){
        if(err){
            return callback(err);
        }else{
            var random = Math.floor(Math.random() * count);
            return models.image.findOne({status : 0}).skip(random).select("file_id").exec(callback);
        }
    })
};

Dao.prototype.create = function (model, data, callback) {
    new models[model](data).save(callback);
};

Dao.prototype.update = function(model, query, update, callback){
    models[model].update(query, update, callback);
};

Dao.prototype.nextRandomImage = function(callback){
    models.image.count(
        {
            status : {
                $ne : 1
            }
        }
    ).exec(function(err, count){
        if(err){
            return callback(err);
        }else{
            var random = Math.floor(Math.random() * count);
            return models.image.findOne(
                {
                    status : {
                        $ne : 1
                    }
                }
            ).skip(random).select("file_id").exec(callback);
        }
    })
};

module.exports = Dao;
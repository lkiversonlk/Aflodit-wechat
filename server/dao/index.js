/**
 * Created by jerry on 3/31/16.
 */


var models = require("../models");

function Dao(){

}

Dao.prototype.nextUnAuditImage = function(callback){
    models.image.findOne(
        {
            status : 0
        }
    ).select("file_id").exec(callback);
};

Dao.prototype.update = function(model, query, update, callback){
    models[model].update(query, update, callback);
}

module.exports = Dao;
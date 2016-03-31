/**
 * Created by jerry on 3/31/16.
 */

var path = require("path");

function PicStream(base){
    this.base = base;
}

PicStream.prototype.picturePath = function(id, callback){
    var self = this;
    callback(null, path.join(self.base, id.substr(0, 2), id));
};

module.exports = PicStream;
/**
 * Created by jerry on 3/2/16.
 */


function Restify(name){
    this.name = name;
};

/**
 *
 * @param searchFunc(req, res, next)
 */
Restify.prototype.registerSearchById = function(searchById){
    this.searchById = searchById;
};

/**
 *
 * @param search(req, res, next)
 */
Restify.prototype.registerSearch = function(search){
    this.search = search
}
/**
 *
 * @param createFunc(req, res, next)
 */
Restify.prototype.registerCreate = function(create){
    this.create = create;
};

/**
 *
 * @param updateById(req, res, next)
 */
Restify.prototype.registerUpdateById = function(updateById){
    this.updateById = updateById;
}
/**
 *
 * @param update(req, res, next)
 */
Restify.prototype.registerUpdate = function(update){
    this.update = update;
};

/**
 *
 * @param deleteFunc
 */
Restify.prototype.registerDelete = function(deleteFunc){
    this.delete = deleteFunc;
};

Restify.prototype.serve = function(router){

    if(this.searchById){
        router.get("/" + this.name + "/:id", this.searchById);
    }

    if(this.search){
        router.get("/" + this.name, this.search);
    }

    if(this.updateById){
        router.put("/" + this.name + "/:id", this.updateById);
    }

    if(this.update){
        router.put("/" + this.name, this.update);
    }

    if(this.create){
        router.post("/" + this.name, this.create);
    }

    if(this.delete){
        router.delete("/" + this.name, this.delete);
    }
};

module.exports = Restify;



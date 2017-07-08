var mysql   = require("mysql");

var USERS_ROUTES = require('./users')

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}
function db_routes(){
    
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    new USERS_ROUTES(router,connection,md5);
}

module.exports = REST_ROUTER;

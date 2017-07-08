var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;

    router.get("/users",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["user_login"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Get: Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.get("/users/:user_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=? LIMIT 1";
        var table = ["user_login","user_id",req.params.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Get/user_id: Error executing MySQL query"});
            } else {
                if(rows.length === 1){
                  res.json({"Error" : false, "Message" : "Success", "User" : rows[0]});
                }else if(rows.length === 0){
                  res.json({"Error" : true, "Message" : "Can not find user id = "+req.params.user_id});
                }else{
                  res.json({"Error" : true, "Message" : "user id = "+req.params.user_id+" has more than 1 records"});
                }
            }
        });
    });

    router.post("/users",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["user_login","user_email","user_password",req.body.user_email,md5(req.body.user_password)];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Post: Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });

    router.put("/users",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["user_login","user_password",md5(req.body.user_password),"user_email",req.body.user_email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Put: Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.user_email});
            }
        });
    });

    router.delete("/users/:user_email",function(req,res){
      // res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.user_email});
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["user_login","user_email",req.params.user_email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Delete: Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.user_email});
            }
        });
    });
}

module.exports = REST_ROUTER;

// const routes = [
//   {
//     method: 'get',
//     url: '/users',
//     query: 'SELECT * FROM ?? WHERE ??=?',
//     tables: ["user_login"],
//     result: {
//       success: {"Error" : false, "Message" : "Success", "Users" : 'yes'},
//       error: {"Error" : true, "Message" : "Error executing MySQL query"}
//     }
//   },
//   {
//     method: 'get',
//     url: '/users/:user_id',
//     query: 'SELECT * FROM ?? WHERE ??=?',
//     tables: ["user_login","user_id",req.params.user_id],
//     result: {
//       success: {"Error" : false, "Message" : "Success", "Users" : 'yes'},
//       error: {"Error" : true, "Message" : "Error executing MySQL query"}
//     }
//   }
// ];
const express = require('express')
const next = require('next')
const Router = require('./routes').Router

var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var rest = require("./rest/routes.js");

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({dev})
const handle = app.getRequestHandler()

function REST(){
    var self = this;
    self.connectMysql();
};

app.prepare()
.then(() => {
  const server = express()
  
  
  
  //////////////////////////////////////
  REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'app_db',
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
          self.stop(err);
        } else {
          self.configureExpress(connection);
        }
    });
  }
  
  REST.prototype.startServer = function() {
      server.listen(port,function(){
          console.log("All right ! I am alive at Port ", port ,".");
      });
  }
  
  REST.prototype.configureExpress = function(connection) {
      var self = this;
      server.use(bodyParser.urlencoded({ extended: true }));
      server.use(bodyParser.json());
      var router = express.Router();
      server.use('/api', router);
      var rest_router = new rest(router,connection,md5);
      
      Router.forEachPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>
        app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
      ))
    
      server.get('*', (req, res) => handle(req, res))
      
      self.startServer();
  }
  
  REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL \n" + err);
    process.exit(1);
  }
  
  new REST();
  
  /////////////////////////////////////
  
  
  

  // Router.forEachPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>
  //   app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
  // ))

  // server.get('*', (req, res) => handle(req, res))
  
  // server.listen(port, (err) => {
  //   if (err) throw err
  //   console.log('> Ready on http://localhost:', port)
  // })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})


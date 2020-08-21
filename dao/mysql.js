var config=require('../service/config')

function mysql(){
    var mysql =require('mysql');
    var connection;
    
    this.connect=function(host,user,password,database){
        connection=mysql.createConnection(host,user,password,database);
        connection.connect();
    }
}
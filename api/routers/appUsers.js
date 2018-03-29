const jwt = require('jsonwebtoken');
const db = require('../db/db');
// const apiResult = require('../utils/apiResult')
// const filter = require('../utils/filter.js')

module.exports = {
    register(app){
        //获取数据库的数据
        app.get('/appUsers',(req,res) => {
            var sql = "select * from appUsers"
            db.mysql.select(sql, function(data){
                // console.log(data)
                res.send(data);
            })
        })
        //查找数据库是否有这个数据
        app.get('/selectAppUsers', function(req, res){

            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id limit 0,10; select FOUND_ROWS() as rowsCount;";
            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id; select FOUND_ROWS() as rowsCount;";
            console.log(req)
            // console.log(req.body);
            let username = req.query.username;
            let password = req.query.password;
            var sql = "select * from appusers where username = '" + username +"'"  ;
            console.log(sql)
			db.mysql.select(sql, function(data){
                // console.log(data)
				res.send(data);
			})
        });
        //写入数据库
        app.get('/insertAppUsers', function(req, res){

            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id limit 0,10; select FOUND_ROWS() as rowsCount;";
            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id; select FOUND_ROWS() as rowsCount;";
            console.log(req.query);
            let username = req.query.username;
            let password = req.query.password;
            var sql = "INSERT INTO appUsers (username,password) VALUES('"+username+"','"+password+"')" ;
            console.log(sql)
			db.mysql.insert(sql, function(data){
                console.log(data)
				res.send(data);
			})
        });
          //查找数据库是否有这个数据
          app.get('/selectusers', function(req, res){

            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id limit 0,10; select FOUND_ROWS() as rowsCount;";
            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id; select FOUND_ROWS() as rowsCount;";
            console.log(req)
            // console.log(req.body);
            let username = req.query.username;
            let password = req.query.password;
            var sql = "select * from users where username = '" + username +"' and password = '"+password+"'"  ;
            console.log(sql)
			db.mysql.select(sql, function(data){
                // console.log(data)
				res.send(data);
			})
        });
    }
}
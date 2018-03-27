const jwt = require('jsonwebtoken');
const db = require('../db/db');
// const apiResult = require('../utils/apiResult')
// const filter = require('../utils/filter.js')

module.exports = {
    register(app){
        //查找数据库是否有这个数据
        app.post('/selectAppUsers', function(req, res){

            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id limit 0,10; select FOUND_ROWS() as rowsCount;";
            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id; select FOUND_ROWS() as rowsCount;";
            console.log(req)
            console.log(req.body);
            let username = req.body.username;
            var sql = "select username,password from appUsers where username = '" + username+"'" ;
            console.log(sql)
			db.mysql.appusersSelect(sql, function(data){
                console.log(data)
				res.send(data);
			})
        });
        //写入数据库
        app.post('/insertAppUsers', function(req, res){

            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id limit 0,10; select FOUND_ROWS() as rowsCount;";
            // var sql = "select SQL_CALC_FOUND_ROWS * from products order by id; select FOUND_ROWS() as rowsCount;";
            console.log(req.body);
            let username = req.body.username;
            let password = req.body.password;
            var sql = "INSERT INTO appUsers (username,password) VALUES('"+username+"','"+password+"')" ;
            console.log(sql)
			db.mysql.insert(sql, function(data){
                console.log(data)
				res.send(data);
			})
        });
    }
}
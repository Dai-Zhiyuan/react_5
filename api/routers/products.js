const jwt = require('jsonwebtoken');
const db = require('../db/db');
// const apiResult = require('../utils/apiResult')
// const filter = require('../utils/filter.js')

module.exports = {
    register(app){
        //get方法获取商品信息
        app.get('/products', function(req, res){
            console.log(req.query)
            if(req.query.type){
                var sql = "SELECT * from products WHERE type = '"+req.query.type+"' ORDER BY id"
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
            } else if(req.query.brand){
                var sql = "SELECT * from products WHERE brand = '"+req.query.brand+"' ORDER BY id"
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
            } else if(req.query.address){
                var sql = "SELECT * from products WHERE type ='"+req.query.type1+"' && address = '"+req.query.address+"' ORDER BY id"
                console.log(sql)
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
                
            } else if(req.query.spike){
                var sql = "SELECT * from products WHERE spike = '1' ORDER BY id"
                console.log(sql)
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
                
            } else if(req.query.recommend){
                var sql = "SELECT * from products WHERE recommend = 'true' ORDER BY id"
                console.log(sql)
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
                
            } 
            else{
                var sql = "select * from products order by id";
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
            }
            
        })
        app.get('/saleProducts',(req,res) => {
            if(req.query.brand){
                var sql = "SELECT * from products WHERE brand = '"+req.query.brand+"' ORDER BY saleQty"
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })  
            } else if(req.query.address){
                var sql = "SELECT * from products WHERE address = '"+req.query.address+"' ORDER BY saleQty"
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })  
            }
            
        })
        app.get('/priceProducts',(req,res) => {
            if(req.query.brand){
                var sql = "SELECT * from products WHERE brand = '"+req.query.brand+"' ORDER BY price"
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
            } else if(req.query.address){
                var sql = "SELECT * from products WHERE address = '"+req.query.address+"' ORDER BY price"
                db.mysql.select(sql, function(data){
                    // console.log(data)
                    res.send(data);
                })
            }
            
        })
        app.get('/suibianid',(req,res) => {
            var sql = "SELECT * from products WHERE id = "+ req.query.id*1
            db.mysql.select(sql, function(data){
                // console.log(data)
                res.send(data);
            })
        })
    }
}
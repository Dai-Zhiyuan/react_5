var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'project2',
  multipleStatements: true
});
 

 
module.exports = {
    select: function(_sql, _callback){
      connection.query(_sql, function(error, results){
        if(error){
            _callback({status: false, error: error})
        }else{
            _callback({qty:results.length, data: results});
        }
      })
    },
        insert: function(_sql,_callback){
        //   console.log(111)
          connection.query(_sql, function(error, results){
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status:true});
            }
        })
    },
        appusersSelect: function(_sql, _callback){
          connection.query(_sql, function(error, results){
        //    console.log(results);
            if(error){
                _callback({status: false, error: error})
            }else{
               _callback({status: true, data: {results}});
            }
            
            
        })
    },
  
}

// module.exports = {
//     select: function(_sql, _callback){
//         console.log(_sql)
// 		connection.query(_sql, function(error, rows){
//             console.log(rows)
//             // if(rows.length > 1){
//             //     _callback({rowsCount: rows[1][0]['rowsCount'], data: rows[0]});
//             //     // _callback({data: rows})
//             // } else {
//             //     _callback(rows);
//             // }
//         })
// 	},
//     // select: function(_sql, _callback){
//     //     db.query(_sql, function(error, results,fields){
//     //     //    console.log(results);
//     //         if(error){
//     //             _callback({status: false, error: error})
//     //         }else{
//     //            _callback({status: true, data: {results}});
//     //         }
            
            
//     //     })
//     // },
//     insert: function(_sql,_callback){
        
//         db.query(_sql, function(error, results,fields){
//             if(error){
//                 _callback({status: false, error: error})
//             }else{
//                 _callback(results.insertId);
//             }
//         })
//     },
//     delete: function(_sql, _callback){
//         db.query(_sql, function (error, results, fields) {
//             if(error){
//                 _callback({ status: false, error: error })
//             }else{
//                 _callback({ status: true, data: { results, fields } });
//             }
//         })
//     },
//     update: function(_sql, _callback){
//         db.query(_sql, function(error, results,fields){
            
//             if(error){
//                 _callback({status: false, error: error})
//             }else{
//                 _callback({status: true, data: {results}});
//             }
//         })
//     }
// }
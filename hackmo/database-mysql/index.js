var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getAllUsers = function(callback) {
  let query = 'SELECT * FROM users';
  connection.query(query, (err, data) => {
    callback(err, data);
  })
};



module.exports.getAllUsers = getAllUsers;


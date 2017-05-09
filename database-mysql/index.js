const mysql = require('mysql');
const sequelize = require('sequelize');
const mysqlConfig = require('./config');

let connection = mysql.createPool(mysqlConfig);


exports.getUserFilters = function(userId, cb) {

};

exports.postFilter = function(userId, filterName, callback) {
  let post = {name: filterName, userId: userId, isDefault: 0};
  connection.query('INSERT INTO filters SET ?', post, function (error, results, fields) {
    if (error) { 
      console.log('mysql index post filter query error', error); 
      callback(error, null);
    } else {
      callback(null, results.insertId);
      console.log('insertID in connection query', results.insertId);
    }
  });
};

exports.postFilterAttributes = function(filterId, type, value, callback) {
  connection.query('INSERT INTO filterattributes SET ?', {filterId: filterId, type: type, value: value}, function(error, results, fields) {
    if (error) {
      console.log('mysql index postFilterAttributes query error', error);
      callback(error, null);
    } else {
      callback(null, results.insertId);
    }
  });
};

exports.connection = connection;

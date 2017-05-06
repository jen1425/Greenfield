var mysql = require('mysql');
var sequelize = require('sequelize');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getUserFilters = function(userId, cb) {

};


module.exports.getUserFilters = getUserFilters;
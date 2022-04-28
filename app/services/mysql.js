const mysql = require('mysql2');
const mysql_user = 'root'; // should not be here. should move to config file and NOT push to git
const mysql_pw = 'root'; // should not be here. should move to config file and NOT push to git

var mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: mysql_user,
    password: mysql_pw,
    database: 'bday_greeting'
});

mysqlConn.connect();

module.exports = {
    mysqlConn
}
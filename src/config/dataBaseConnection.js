let mysql = require('mysql');

var connecionMySql = () => {
    console.log('DB Connection opened');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'portal_noticias' 
    });
}

module.exports = () => {
    return connecionMySql
}
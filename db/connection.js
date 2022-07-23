const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // mysql pw
        password: 'insert your password here',
        database: 'election'
    },
);

module.exports = db;

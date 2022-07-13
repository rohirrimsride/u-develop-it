const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // mysql pw
        password: 'Amuse-Pastry-Secret-Yellow-2',
        database: 'election'
    },
);

module.exports = db;
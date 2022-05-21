const {Pool}= require('pg');

const conection = new Pool({
user: '',
host: '',
database: '',
password: '',
port: ""})

module.exports = conection
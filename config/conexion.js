const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'persona'
});

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrio un error: '+err);
    }
    else{
        console.log('La base de datos se conecto!!');
    }
});

module.exports = conexion;
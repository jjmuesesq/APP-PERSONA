# APP-PERSONA
API REST PERSONA

# 1. CONFIGURACION DEL SERVIDOR - BACKEND

instalacion de NodeJs y configuracion de dependencias en PATH npm

## creacion de archivo json en index.js
```bash
npm init -y
```

## instalacion de dependecias de desarrollo nodemon
```bash
npm install --save-dev nodemon
```

## configuracion nodemon para ejecutar index.js en package.json
```javascript
  "scripts": {
    "dev": "nodemon/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## ejecutar el servidor
```bash
npm run dev
```
finalizar servidor con ctrl c

## instalacion del framework express y conexion a Mysql
```bash
npm install express mysql
```

## creacion directorio config para la conexion a base de datos

conexion.js script que implementa la conexion a mysql
```javascript
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
```

# 2. CRUD 

Determinacion de rutas para acceder a base de datos por las peticiones del usuario

terminacion de confguracion del servidor en index.js

## GET

http://localhost:3000/api

## POST

http://localhost:3000/api

## PUT

http://localhost:3000/api/2

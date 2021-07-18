# APP-PERSONA
API REST PERSONA

///////////////////////////////////////////////////////////////////////////////////////

/* 1. CONFIGURACION DEL SERVIDOR*/

- instalacion de NodeJs y configuracion de dependencias en PATH npm

- creacion de archivo json en index.js
npm init -y

- instalacion de dependecias de desarrollo nodemon
npm install --save-dev nodemon

- configuracion nodemon para ejecutar index.js en package.json

  "scripts": {
    "dev": "nodemon/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

ejecutar el servidor => npm run dev 
finalizar servidor => ctrl c

-instalacion del framework express y conexion a Mysql
npm install express mysql

- creacion directorio config para la conexion a base de datos
conexion.js => script que implementa la conexion a mysql

- terminacion de confguracion del servidor en index.js, determinacion de rutas y puerto 
http://localhost:3000/api

# SKELETON

- Express
- PostgreSQL
- Sequelize ORM
- Autenticación con Tokens
- Bcrypt para hashear contraseñas
- Uso de Json web Token

-----

- Rutas de Login y Creacion de Usuarios (Register)
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autenticación y manejo de permisos
- 
    
# ORDEN

1) app.js
2) .env
3) config.js
4) database.js
5) modelos
6) controladores
7) servicios
8) rutas

# INSTALAR

{
  "name": "skeleton",
  "version": "1.0.0",
  "description": "- Express\r - PostgreSQL\r - Sequelize ORM\r - Autenticación con Tokens\r - Bcrypt para hashear contraseñas\r - Uso de Json web Token",
  "main": "index.js",
  "scripts": {
    "start": "node ./src/app.js",
    "dev": "nodemon ./src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.0",
    "pg": "^8.8.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.25.3",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}

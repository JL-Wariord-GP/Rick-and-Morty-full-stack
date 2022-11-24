//? Auth va a contener las rutas de autorización y de autenticación
//* Login
//* Register
//* Recovery Password
//* Verify User

const router = require('express').Router()
const authServices = require('./auth.services')
const {registerUser} = require('../users/users.services')

//? /api/v1/auth (PREFIJO)

router.post('/register', registerUser)

router.post('/login', authServices.login)

module.exports = router
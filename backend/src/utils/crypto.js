const bcrypt = require('bcrypt')

//? Encripta la contraseña del usuario cuando se crea o se modifica la contraseña
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

//? Comprar si la contraseña root es = a DB
const comparePassword = (plainPassword, hashedPassword) => {
    //* plainPassword : Contraseña que recibimos del login
    //* hashedPassword : Contraseña que tenemos guardada en la base de datos
    //! Esta utilidad se usa para cuando hacemos un login y cuando recibimos la contraseña del usuario 
    //! y la comparamos con la q' tenemos en DB
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

//console.log(hashPassword('root'));
//console.log(comparePassword('root', '$2b$10$cESNiKyJg8/w3c566YtD0.BhAy/I4P4e1hlsiNNK55oKzxHSVbGH6'));


module.exports = {
    hashPassword,
    comparePassword
}




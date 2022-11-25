const {DataTypes} = require('sequelize')

const db = require('../utils/database')


const Comments = db.define('comments', 
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },
        character: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "first_name" //! Esta es la manera de como se guardara en la db
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Comments
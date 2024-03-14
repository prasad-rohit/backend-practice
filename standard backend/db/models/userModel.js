const sqlConnection = require("../../config/db/sql")
const { DataTypes } = require("sequelize")
const sequelize = sqlConnection()

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    bio:{
        type: DataTypes.TEXT
    }
})

User.sync()
module.exports = User

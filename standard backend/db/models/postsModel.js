const sqlConnection = require("../../config/db/sql")
const { DataTypes } = require("sequelize")
const User = require("../models/userModel")
const sequelize = sqlConnection()

const Posts = sequelize.define('Post', {
    post_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: "user_id"
        }
    },
    content:{ 
        type: DataTypes.BLOB,
        allowNull: false
    }
})

Posts.sync()
module.exports = Posts

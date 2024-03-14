const sqlConnection = require("../../config/db/sql")
const { DataTypes } = require("sequelize")
const User = require("./userModel")
const Posts = require("./postsModel")

const sequelize = sqlConnection()

const Likes = sequelize.define('Likes', {
    like_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: "user_id"
        }
    },
    post_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Posts,
            key: "post_id"
        }
    }
})

Likes.sync()
module.exports = Likes

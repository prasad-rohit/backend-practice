const sqlConnection = require("../../config/db/sql")
const { DataTypes } = require("sequelize")
const User = require("./userModel")
const Posts = require("./postsModel")

const sequelize = sqlConnection()

const Comments = sequelize.define('Comments', {
    comment_id:{
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
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})

Comments.sync()
module.exports = Comments

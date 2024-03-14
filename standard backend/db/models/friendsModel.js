const sqlConnection = require("../../config/db/sql")
const { DataTypes } = require("sequelize")
const User = require("./userModel")

const sequelize = sqlConnection()

const Friends = sequelize.define('Friends', {
    request_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user1_id:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: "user_id"
        }
    },
    user2_id:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: "user_id"
        }
    },
    status:{
        type: DataTypes.ENUM,
        values: ['accepted', 'pending', 'rejected'],
        allowNull: false
    }
})

Friends.sync()
module.exports = Friends

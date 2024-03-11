const { Sequelize } = require("sequelize")

function sqlConnection(){
    const sequelize = new Sequelize(
        "social",
        "root",
        "rohit@1234",{
            host: "localhost",
            dialect: "mysql",
            pool: {
                max: 10,
                min: 0,
                acquire: 30000
            }
        }
    )
    sequelize
        .authenticate()
        .then(() => console.log("Successfully connected to sql database"))
        .catch((e) => console.log("Error occurred while connecting to database ", e))
    
    return sequelize
}

module.exports = sqlConnection

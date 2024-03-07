const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const authRoute = require("./routes/authRoute")
const sqlConnection = require("./config/db/sql")

dotenv.config({ path: path.resolve(__dirname, 'config', `.env.${process.env.NODE_ENV}`) })
sqlConnection.connect((err) => {
    if(err){
        console.log("Error connecting sql database ", err)
        return
    }

    console.log("Db connected at ", sqlConnection.threadId)
})

const app = express();

app.use("/", authRoute)

const port = process.env.PORT;
app.listen(port, () => {
    console.log("App is listening at port ", port)
})

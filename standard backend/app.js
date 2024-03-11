const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const router = require("./routes/index")
const bodyParser = require('body-parser');
const sqlConnection = require("./config/db/sql")
const mongoConnection = require("./config/db/mongodb")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(router)

dotenv.config({ path: path.resolve(__dirname, 'config', `.env.${process.env.NODE_ENV}`) })
mongoConnection()
sqlConnection()

const port = process.env.PORT;
app.listen(port, () => {
    console.log("App is listening at port ", port)
})

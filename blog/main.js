const express = require("express")
const userRoute = require("./src/routes/userRoutes")
const authRoute = require('./src/routes/authRoutes')

const app = express();

app.use(express.json());
app.use("/user", userRoute);
app.use("/", authRoute);

app.listen(3000, () => {
    console.log("App is listening at port 3000");
})

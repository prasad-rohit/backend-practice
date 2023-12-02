const express = require("express")
const userRoute = require("./src/routes/userRoutes")

const app = express();

app.use("/user", userRoute)

app.listen(3000, () => {
    console.log("App is listening at port 3000");
})

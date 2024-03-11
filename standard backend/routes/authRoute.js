const express = require("express")
const {signUpController, loginController} = require("../controllers/authController")

const authRouter = express.Router();

authRouter.post("/sign-up", signUpController)
authRouter.post("/login", loginController)

module.exports = authRouter

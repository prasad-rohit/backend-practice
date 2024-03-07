const express = require("express")
const signUpController = require("../controllers/authController")

const Router = express.Router();

Router.get("/sign-up", signUpController)

module.exports = Router

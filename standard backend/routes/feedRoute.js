const express = require("express")
const { getFeed } = require("../controllers/feedController")
const authenticateToken = require("../middleware/verifyToken");

const feedRouter = express.Router()

feedRouter.get("/",authenticateToken, getFeed)

module.exports = feedRouter

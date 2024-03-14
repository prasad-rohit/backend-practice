const express = require("express")
const { getFriends, addFriend, removeFriend } = require("../controllers/friendController")
const authenticateToken = require("../middleware/verifyToken");

const friendRouter = express.Router()

friendRouter.get("/",authenticateToken, getFriends)
friendRouter.post("/:uid",authenticateToken,  addFriend)
friendRouter.delete("/:uid",authenticateToken,  removeFriend)

module.exports = friendRouter

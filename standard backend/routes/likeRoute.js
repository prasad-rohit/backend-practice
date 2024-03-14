const express = require("express")
const { getLikes, addLike, removeLike } = require("../controllers/likesController")
const authenticateToken = require("../middleware/verifyToken");

const likesRouter = express.Router()

likesRouter.get("/post/:pid/likes",authenticateToken,  getLikes)
likesRouter.post("/post/:pid/like",authenticateToken,  addLike)
likesRouter.delete("/post/:pid/like",authenticateToken,  removeLike)

module.exports = likesRouter

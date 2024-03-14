const express = require("express")
const authenticateToken = require("../middleware/verifyToken")
const {  getPost, createPost, updatePost, deletePost } = require("../controllers/postController")

const postRouter = express.Router()

postRouter.get("/:pid",authenticateToken, getPost)
postRouter.post("/",authenticateToken, createPost)
postRouter.put("/:pid",authenticateToken, updatePost)
postRouter.delete("/:pid",authenticateToken, deletePost)


module.exports = postRouter

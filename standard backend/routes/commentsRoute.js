const express = require("express")
const { getComment, setComment, updateComment, deleteComment } = require("../controllers/commentController")
const authenticateToken = require("../middleware/verifyToken");

const commentRouter = express.Router()

commentRouter.get("/:cid",authenticateToken,  getComment)
commentRouter.post("/",authenticateToken,  setComment)
commentRouter.put("/:cid",authenticateToken,  updateComment)
commentRouter.delete("/:cid",authenticateToken,  deleteComment)

module.exports = commentRouter

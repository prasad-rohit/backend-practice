const express = require("express")
const { getUser, updateUser, deleteUser } = require("../controllers/userController")
const authenticateToken = require("../middleware/verifyToken");

const userRouter = express.Router()

userRouter.get("/",authenticateToken,  getUser)
userRouter.put("/",authenticateToken,  updateUser)
userRouter.delete("/",authenticateToken,  deleteUser)

module.exports = userRouter

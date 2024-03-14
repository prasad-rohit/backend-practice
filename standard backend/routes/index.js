const express = require("express")
const router = express.Router()

const authRouter = require("./authRoute")
const postRouter = require("./postRoute")
const commentRouter = require("./commentsRoute")
const feedRouter = require("./feedRoute")
const friendRouter = require("./friendRoute")
const likesRouter = require("./likeRoute")
const userRouter = require("./userRoute")

router.use("/auth", authRouter)
router.use("/user",userRouter)
router.use("/post",postRouter)
router.use("/like",likesRouter)
router.use("/posts/:postId/comments",commentRouter)
router.use("/friend",friendRouter)
router.use("/feed",feedRouter)

module.exports = router

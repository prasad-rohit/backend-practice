const express = require("express")

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.status(200).send("You are at user home route")
})

userRouter.get("/:uid", (req, res) => {
    res.status(200).send("You are at user id home route")
})

userRouter.get("/:id/posts", (req, res) => {
    res.status(200).send("You are at user home posts route")
})

module.exports = userRouter

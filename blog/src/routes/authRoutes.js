const express = require("express")

const authRoute = express.Router();

authRoute.post("/sign-up", (req, res) => {
    const params = req.body;
    
    res.status(200).send(`User is created with username ${params.username} and pass ${params.password}`)
})

module.exports = authRoute

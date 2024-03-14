const jwt = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {
    const token = req.headers["auth_token"]
    
    if(!token){
        return res.status(401).json({ message: "Unauthorized" })
    }
    
    jwt.verify(token, "secret", (err, decoded) => {
        if(err){
            return res.status(403).json({ message: "Invalid session" })
        }
        req.user = decoded
        next()
    })
}

module.exports = authenticateToken

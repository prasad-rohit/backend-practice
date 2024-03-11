const { getUser, createUser } = require("../db/dao/userDao")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function signUpController(req, res){
    const { username, password, email } = req.body.data;
    const userData = {
        username,
        password,
        email
    }
    const user = await createUser(userData)
    res.status(user[1]).send(user[0])
}

async function loginController(req, res){
    const { username, password } = req.body.data;
    
    const user = await getUser(username)
    if(user[1] === 500){
        res.status(404).json({error : "No user found"})
    }
    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if(!isPasswordValid){
        res.status(401).json({error : "Either username or password is wrong"})
    }
    
    const token = jwt.sign({userId: user.id}, "secret", {expiresIn: '1h'})
    res.status(user[1]).send({token})
}

module.exports = { signUpController, loginController }

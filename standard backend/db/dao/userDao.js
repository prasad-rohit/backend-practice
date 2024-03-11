const User = require("../models/userModel")
const bcrypt = require("bcrypt")

async function getUser(username){
    try {
        const user = await User.findOne({ where: { username: username } })
        
        return [user, 200]
    }catch (e) {
        console.log("Unable to find user ",e)
        return [{error : e}, 500]
    }
}

async function createUser(userData){
    const { username, password, email } = userData
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            password: hashedPassword,
            email
        })
        return [newUser, 200];
    }catch (e) {
        console.log("Error creating User", e)
        return [{error : e}, 500]
    }
}

module.exports = {getUser, createUser}

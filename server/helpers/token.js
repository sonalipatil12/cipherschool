const jwt = require("jsonwebtoken")

function createToken(payload = {}, expire = 60 * 10) {

    try {
        return jwt.sign(payload, process.env.KEY, { expiresIn: expire })
    }
    catch (err) {
        console.log("create token error", err)
    }
}

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.KEY)
    }
    catch (err) {
        console.log("verify token err", err)
    }

}

module.exports = { createToken, verifyToken }
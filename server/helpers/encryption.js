const bcrypt = require("bcrypt")

function encrypt(text) {
    try {
        return bcrypt.hashSync(text, 10)
    }
    catch (e) {
        console.log(e)
    }
}

function compareHash(text, hash) {
    try {
        return bcrypt.compareSync(text, hash)
    }
    catch (e) {
        console.log(e)
    }

}

module.exports = { encrypt, compareHash }
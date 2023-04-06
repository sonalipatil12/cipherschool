const UserModel = require("../models/user.model")
const _ = require("lodash")
const { encrypt } = require("../helpers/encryption")
const fs = require("fs")
class UserCtrl {
    static pickUser(user) {

        return _.pick(user, [
            "_id",
            "name",
            "email",
            "address",
            "mobile",
            "gender",
            "dob",
            "role",
            "status",
            "avatar",
            "address",

        ])

    }
    //to create user
    static createUser(req, res) {

        const user = req.body;
        if (user.password) user.password = encrypt(user.password)
        if (req.files.avatar) {
            const avatarfile = req.files.avatar[0];
            user.avatar = `avatar/${avatarfile?.filename}`

        }
        new UserModel(user)
            .then(result => {
                res.status(201)
                    .send({ message: "user created", data: UserCtrl.pickUser(result) })
            })
            .catch(err => {
                res.status(400)
                    .send({ message: "user not created", err: err })

            })

    }
    //fetch single user
    static fetchOneUser(req, res) {
        const { id } = req.params;
        UserModel.findById({ _id: id })
            .then((result) => {
                res.status(201)
                    .send({ message: "user found", data: UserCtrl.pickUser(result) })
            })
            .catch((err) => {
                res.status(400)
                    .send({ message: "User not found", err: err })
            })
    }
    static updateUser(req, res) {
        const { id } = req.params;
        const user = req.body;
        UserModel.findById({ _id: id }, user, { new: true })
            .then(result => {
                res.status(200)
                    .send({ message: "user updated...", data: UserCtrl.pickUser(result) })
            })
            .catch(err => {
                res.send(401)
                    .send({ message: "user not updated...", err: err })
            })
    }

}
module.exports = UserCtrl;
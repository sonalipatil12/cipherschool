const _ = require("lodash")
const { encrypt } = require("../../helpers/encryption");
const fs = require("fs")
const UserModel = require("../models/user.model")
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
            "Qualification",
            "class",
            "admission",
            "address",
            "idDoc"
        ])

    }
    static createUser(req, res) {
        const user = req.body;
        if (user.password) user.password = encrypt(user.password)
        if (req.files.avatar) {

            const ava = req?.files.avatar[0];
            user.avatar = `users-avatar/${ava?.filename}`;
        }
        if (req.files.idDoc) {
            const ava = req?.files.idDoc[0];
            user.idDoc = `users-id/${ava?.filename}`;
        }


        new UserModel(user)
            .save()
            .then((result) => {
                res
                    .status(201)
                    .send({ messsage: "User created", data: UserCtrl.pickUser(result) })

            })
            .catch((Err) => {
                console.log("err", Err)
                    .status(500)
                    .send({ Message: "User not Created", error: Err })
            })
    }
    static updateUser(req, res) {
        const { id } = req.params;
        const user = req.body;
        if (user.password) encrypt(user.password)
        if (req.files.avatar) {
            const ava = req?.files.avatar[0];
            user.avatar = `users-avatar/${ava?.filename}`;
        }
        if (req.files.idDoc) {
            const ava = req?.files.idDoc[0];
            user.idDoc = `users-id/${ava?.filename}`;
        }

        UserModel.findOneAndUpdate({ _id: id }, user, { new: true })
            .then((result) => {
                res.status(201)
                    .send({ message: "user updated...", data: UserCtrl.pickUser(result) })
            })
            .catch((err) => {
                res.status(400)
                    .send({ message: "user not updated...", data: err })
            })
    }
    static deleteUser(req, res) {
        const { id } = req.params;
        UserModel.findByIdAndUpdate({ _id: id }, { status: 2 }, { new: true })
            .then((result) => {
                res.status(201)
                    .send({ message: "user deleted...", data: UserCtrl.pickUser(result) })
            })
            .catch((err) => {
                res.status(400)
                    .send({ message: "user not deleted...", err: err })
            })
    }
    static fetchOneUser(req, res) {
        const { id } = req.params;
        console.log("reqfetchone", id)
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
    static fetchAllUser(req, res) {
        const { status, role, gender } = req.query;
        let filter = {};
        if (!status) filter = { $or: [{ status: 0 }, { status: 1 }] };
        if (gender) filter.gender = gender;
        if (status) filter.status = status;
        if (role) filter.role = role;
        if (!role) filter.role = "admin";
        UserModel.find(filter)
            .then((result) => {
                res.status(201)
                    .send({ messsage: "user list", data: _.map(result, UserCtrl.pickUser) })
            })
            .catch((err) => {
                res.status(400)
                    .send({ message: "User not fetched...", err: err })
            })

    }
    static updateDeleteImage(req, res) {

        const { id } = req.params;
        const { existingAvatar } = req.body
        const user = {}
        if (req.files.avatar) {
            const ava = req.files.avatar[0]
            user.avatar = `users-avatar/${ava?.filename}`;
            existingAvatar && fs.unlink(`uploads/${existingAvatar}`, () => {
                console.log("update deleted " + existingAvatar);
            })
            UserModel.findOneAndUpdate({ _id: id }, user, { new: true })
                .then((result) => {

                    res.status(201)
                        .send({ message: "user updated...", data: UserCtrl.pickUser(result) })
                })
                .catch((err) => {

                    res.status(400)
                        .send({ message: "user not updated...", err: err })
                })
        }

    }
}

module.exports = UserCtrl;
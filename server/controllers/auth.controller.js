const UserModel = require("../models/user.model")
const { createToken, verifyToken } = require("../helpers/token")
const { encrypt, compareHash } = require("../helpers/encryption")
const UserCtrl = require("./user.controller");
const { model, models } = require("mongoose");
class Authctrl {

    static userLogin(req, res) {
        const { email, password } = req.body;

        UserModel.find({ email: email, status: 1 })
            .then(result => {
                if (!result) throw Error("invalid email")
                else if (compareHash(password, result.password)) {
                    const accessToken = createToken({
                        id: result._id,
                        role: result.role
                    }, 60 * 10)
                    const refreshToken = refreshToken({
                        id: result._id,
                        role: result.role
                    }, 60 * 25)
                    res.set("x-access-token", accessToken);
                    res.set("x-refresh-token", refreshToken);
                    res.status(200)
                        .send({ message: "login successful", data: UserCtrl.pickUser(result) })

                }
                else res.status(404).send({ message: "invalid Password" })

            })
            .catch(err => {
                console.log(err);
                res.status(404).send({ message: "Inavalid email or User is diasble" });
            })
    }
    static validateToken(req, res) {
        const token = req.headers.authorization;
        const payload = verifyToken(token);
        if (payload._id) {
            const { _id } = payload;
            UserModel.find({ _id: _id })
                .then(result => {
                    res.status(200)
                        .send({ message: "validate Token", data: UserCtrl.pickUser(result) })
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error("inavalid token ");
                });

        }
        else {
            //invalid token
            res.status(403).send({ message: "access token expired", error: null });
        }


    }

    static refreshToken(req, res) {
        const { refresh } = req.body;

        const payload = verifyToken(refresh)
        if (payload._id) {
            const accessT = createToken(
                { _id: payload?._id, role: payload?.role },
                60 * 10
            );
            const refreshT = createToken(
                { _id: payload?._id, role: payload?.role },
                60 * 25
            );
            res.status(200)
                .send({ message: "token created", data: { accessT, refreshT } })

        }
        else {
            res.status(420)
                .send({ message: "session expired", err: err })
        }

    }
}
module.exports = Authctrl
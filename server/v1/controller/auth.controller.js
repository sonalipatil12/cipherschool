const UserModel = require("../models/user.model")
const { createToken, verifyToken } = require("../../helpers/token")
const { compareHash } = require("../../helpers/encryption");
const UserCtrl = require("./user.controller");
class AuthCtrl {
    static userLogin(req, res) {
        const { email, password } = req.body;
        console.log("email", req.body)
        UserModel.findOne({ email: email, status: 1 })
            .then((result) => {
                if (!result) throw new Error("invalid email")
                else if (compareHash(password, result?.password)) {

                    const accessT = createToken(
                        {
                            _id: result?.id,
                            role: result?.role
                        },
                        10 * 60
                    )

                    const refreshT = createToken(
                        {
                            _id: result?.id,
                            role: result?.role,
                        },
                        25 * 60
                    )
                    res.set("x-access-token", accessT)
                    res.set("x-refresh-token", refreshT)
                    res.status(200).send({ message: "Login successful", data: result })
                }
                else {
                    res.status(404).send({ message: "Invalid password" })
                }
            })
            .catch((err) => {
                console.log("userLogin", err)
            })
    }

    static validateToken(req, res) {
        const token = req.headers.authorization;
        const payload = verifyToken(token)

        if (payload?._id) {
            const { _id } = payload

            UserModel.findOne({ _id })
                .then((result) => {
                    res.status(200).send({ message: "valid user", data: UserCtrl.pickUser(result) })

                })
                .catch((err) => {
                    console.log("validateToken", err)
                    throw new Error("token not valid")
                })
        }
        else {
            res.status(403).send({ message: "Invalid token", error: null })
        }
    }

    static refreshToken(req, res) {
        const { refresh } = req.body;

        const payload = verifyToken(refresh)

        if (payload?._id) {
            const accessT = createToken(
                {
                    _id: payload._id,
                    role: payload?.role
                },
                10 * 60
            )
            const refreshT = createToken(
                {
                    _id: payload._id,
                    role: payload?.role
                },
                25 * 60
            )
            res
                .status(200)
                .send({ data: { refreshT, accessT }, message: "token created" })
        }
        else {
            res
                .status(403)
                .send({ message: "session expired", error: null })

        }
    }


}

module.exports = AuthCtrl
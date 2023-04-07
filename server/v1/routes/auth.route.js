const router = require("express").Router();

const { userLogin, validateToken, refreshToken } = require("../controller/auth.controller")

router.post("/login", userLogin)
router.post("/validate-token", validateToken)
router.post("/refresh-token", refreshToken)


module.exports = router
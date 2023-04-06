const router = require("express").Router();
const multer = require("multer")
const path = require("path")
const { validateUser } = require("../helpers/middleware/user.validation")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "avatar") cb(null, "uploads/users-avatar");
        else if (file.fieldname == "idDoc") cb(null, "uploads/users-id");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(
            null,
            file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
        );
    },
});
const upload = multer({ storage: storage });

const { createUser, fetchOneUser } = require("../controllers/user.controller")

router.post("/", upload.fields([{ name: "avatar", maxCount: 1 }]), validateUser, createUser)

router.get("/:id", fetchOneUser)
module.exports = router
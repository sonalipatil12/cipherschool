const router = require("express").Router();
const multer = require("multer")
const path = require("path")
const authorization = require("../../helpers/middlewares/authorize")


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
const { createUser, fetchAllUser, fetchOneUser, updateUser, updateDeleteImage } = require("../controller/user.controller")

router.post("/", upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "idDoc", maxCount: 1 },
]), createUser)
router.put("/:id", upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "idDoc", maxCount: 1 }
]),
    authorization(["admin", "teacher", "student", "parent"]),
    updateUser)
router.post("/image/:id", upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "idDoc", maxCount: 1 }
]),
    // authorization(["admin", "teacher", "student", "parent"])
    // ,
    updateDeleteImage)
router.get("/:id",
    //  authorization(["admin", "teacher", "student", "parent"]), 
    fetchOneUser)
router.get("/", authorization(["admin", "teacher", "student", "parent"]), fetchAllUser)


module.exports = router
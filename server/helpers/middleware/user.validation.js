const joi = require("joi")
function validateUser(req, res, next) {
    const user = req.body;
    const schema = joi.object({
        "name.first": joi.string().min(3).max(45),
        "name.last": joi.string().min(3).max(45),
        mobile: joi.string()
            .pattern(new RegExp("^[0-9]${10,15}"))
            .error(() => new Error("mobile must be 10 digit")),
        email: joi.string()
            .email({
                minDomainSegments: 2,
                tlds: { allow: ["com", "net", "in"] },
            })
            .error(() => new Error("Invalid email")),
        password: joi.string()
            .allow("")
            .optional()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}")),
        gender: joi.string().min(1).max(15),
        role: joi.string().min(1).max(25),
        status: joi.any(),
        userId: joi.number().min(0).max(10).optional(),
        dob: joi.date(),
        avatar: joi.string().allow("").optional(),
        idDoc: joi.string().allow("").optional(),
        "address.street": joi.string().min(3).max(45),
        "address.city": joi.string().min(3).max(45),
        "address.country": joi.string().min(3).max(45),
        "address.pincode": joi.string().min(2).max(15),
        existingAvatar: joi.string().allow("").optional(),
        existingIdDoc: joi.string().allow("").optional(),
        class: joi.string().allow("").optional(),
    })
    const result = schema.validate(user);
    console.log("result", result);
    if (result?.error)
        res.status(500).send({ message: result.error.message, error: null });
    else next();
}
module.exports = { validateUser }
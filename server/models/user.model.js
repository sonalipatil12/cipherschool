const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose)
const UserSchema = mongoose.Schema({
    userId: Number,
    name: {
        first: {
            type: String,
            minlength: 3,
            maxlength: 45
        },

        last: {
            type: String,
            minlength: 3,
            maxlength: 45
        },
    },
    mobile: {
        type: String,
        minlength: 10,
        maxlength: 15
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 100,
        unique: true,
        required: true,
    },
    password: String,
    gender: { type: String, minlength: 1, maxlength: 15 },
    dob: Date,
    role: String,
    status: Number, // (0 -inactive, 1- active, 2- deleted)
    avatar: String,

    address: {
        street: String,
        city: String,
        country: String,
        pincode: String,
    },


    createdAt: { type: Date, default: Date.now },
})

UserSchema.plugin(AutoIncrement, { inc_field: "userId" });
module.exports = mongoose.model("users", UserSchema)
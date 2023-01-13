const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userSchema = mongoose.Schema({
     name: {
        type: String,
        requred: [true, "Please add a name"]
     },
     email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        trim: true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Please enter a valid email"
        ]
     },
     password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 characters"],
        // maxLength: [20, "Password must not be more than 20 characters"]
     },
     photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
     },
     phone: {
        type: String,
        required: [true, "Please add a phone number"],
        default: "+880"
     },
     bio: {
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "No bio available"
     }
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema);
module.exports = User;
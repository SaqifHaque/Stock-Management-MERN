const asyncHandler = require('express-async-handler');
const User = require('../schema/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'});
}

const registerUser = asyncHandler ( async (req, res) => {
    const {name, email, password} = req.body;

    //Validation
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please fill in all required fields")
    }

    if(password.length < 6){
        res.status(400);
        throw new Error("Password must be up to 6 characters")
    }

    // Check if user email already exists
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("Email has already been used")
    }

    //create new user
    const user = await User.create({
        name,
        email,
        password
    })

    // JWT Token creation
    const token = generateToken();

    // Send HTTP-Only-Cookie
    res.cookie("token", token,{
        path: '/',
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400) , // 1 day
        sameSite: "none",
        secure: true
    });


    if(user){
        const { _id, name, email, photo, phone, bio } = user;
        res.status(201).json({
            _id, name, email, photo, phone, bio
        })
    } else {
        res.status(400);
        throw new Error("Invalid user data")
    }

})

//Login

const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body;

    //Validation Request
    if(!email || !password) {
        res.status(400);
        throw new Error("Please add email and password");
    }   

    //Check if user exists
    const user = await User.findOne({email});

    if(!user) {
        res.status(400);
        throw new Error("User not found. Please sign up");
    }
    
    // check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

      // JWT Token creation
      const token = generateToken();

      // Send HTTP-Only-Cookie
      res.cookie("token", token,{
          path: '/',
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 86400) , // 1 day
          sameSite: "none",
          secure: true
      });

    if(user && passwordIsCorrect) {
        const { _id, name, email, photo, phone, bio } = user;
        res.status(200).json({
            _id, name, email, photo, phone, bio, token
        })
    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
})

// Logout 

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("token", "",{
        path: '/',
        httpOnly: true,
        expires: new Date(0) , // 1 day
        sameSite: "none",
        secure: true
    });
    
    return res.status(200).json({ message: 'Successfully Logged out'});
})

const getUser = asyncHandler(async (req, res) => {
    res.send("")
})


module.exports = { registerUser, loginUser, logoutUser, getUser };
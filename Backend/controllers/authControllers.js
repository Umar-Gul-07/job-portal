import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";
import {School} from "../models/schoolModel.js";
const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "User not found" });
        }
        console.log(existingUser)

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = generateToken(existingUser);

        res.status(200).json({
            message: "Login successful",
            user: {
                id: existingUser._id,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
                email: existingUser.email,
                phone: existingUser.phone,
                isUser:existingUser.isUser,
            },
            token: token
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: error.message });
    }
};

const schoollogin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const existingUser = await School.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = generateToken(existingUser);

        res.status(200).json({
            message: "Login successful",
            user: {
                id: existingUser._id,
                schoolName: existingUser.schoolName,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
                email: existingUser.email,
                phone: existingUser.phone,
                isHire:existingUser.isHire
            },
            token: token
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: error.message });
    }
};

// Example of a function to generate a JWT token

const generateToken = (user) => {
    // Replace with your own secret key and expiration time
    const secretKey = 'poiuytrewqlkjhgfdsamnbvcxz';
    const expirationTime = '1h'; // Token expires in 1 hour

    // Generate a token
    return jwt.sign(
        { userId: user._id, email: user.email },  // Payload
        secretKey,                               // Secret key
        { expiresIn: expirationTime }            // Options
    );
};

export {login,schoollogin}
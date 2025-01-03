import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";
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
    const secretKey = 'your-secret-key';
    const expirationTime = '1h'; // Token expires in 1 hour

    // Generate a token
    return jwt.sign(
        { userId: user._id, email: user.email },  // Payload
        secretKey,                               // Secret key
        { expiresIn: expirationTime }            // Options
    );
};

export default login
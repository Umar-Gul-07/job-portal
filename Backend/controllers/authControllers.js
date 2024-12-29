import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import lawyerModel from "../models/lawyerModel.js";
import createError from "../utils/error.js";

// Login function with JWT
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    console.log("Login attempt for email:", email);
    
    // Check for Lawyer
    const foundLawyer = await lawyerModel.findOne({ email });
    if (foundLawyer) {
      const passwordMatch = await bcrypt.compare(password, foundLawyer.password);
      console.log("Password match result:", passwordMatch);

      if (passwordMatch && foundLawyer.isLawyer) {
        // Generate JWT token
        const token = jwt.sign(
          { id: foundLawyer._id, role: "lawyer" }, // Payload
          process.env.JWT_SECRET, // Secret key from .env file
          { expiresIn: "1d" } // Token expiry (1 day)
        );

        const { password, ...otherDetails } = foundLawyer._doc; // Exclude password from response
        return res.status(200).json({
          success: true,
          message: "Authentication successful",
          userType: "lawyer",
          token, // Send JWT token in the response
          userDocument: otherDetails,
        });
      } else {
        console.log("Password mismatch or lawyer status invalid");
        return res.status(401).json({ success: false, message: "Authentication failed for lawyer" });
      }
    }

    // Check for User
    const foundUser = await userModel.findOne({ email });
    if (foundUser) {
      const passwordMatch = await bcrypt.compare(password, foundUser.password);

      if (passwordMatch) {
        // Generate JWT token
        const token = jwt.sign(
          { id: foundUser._id, role: "user" }, // Payload
          process.env.JWT_SECRET, // Secret key from .env file
          { expiresIn: "1d" } // Token expiry (1 day)
        );

        const { password, ...otherDetails } = foundUser._doc; // Exclude password from response
        return res.status(200).json({
          success: true,
          message: "Authentication successful",
          userType: "user",
          token, // Send JWT token in the response
          userDocument: otherDetails,
        });
      } else {
        console.log("Password mismatch for user");
        return res.status(401).json({ success: false, message: "Authentication failed for user" });
      }
    }

    console.log("No user or lawyer found with the given email");
    return next(createError(404, "User not found"));

  } catch (err) {
    console.error("Error during authentication process:", err);
    next(err);
  }
};

export default login;

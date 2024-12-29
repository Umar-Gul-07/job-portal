import lawyerModel from "../models/lawyerModel.js";
import Payment from "../models/paymentModel.js";
import user from "../models/userModel.js";
import createError from "../utils/error.js";
import bcrypt from 'bcrypt';

class UserController {

    static register = async (req, res, next) => {
        try {
            const {
                firstName,
                lastName,
                email,
                phone,
                password,
                nationality,
                residentId,
                dateOfBirth,
                country,
                area,
                organization,
                backgroundChecks
            } = req.body;

            // Check for existing user
            const existingUser = await userModel.findOne({email});
            if (existingUser) {
                return res.status(400).json({message: "Email already exists"});
            }

            const newUser = new userModel({
                firstName,
                lastName,
                email,
                phone,
                password,
                nationality,
                residentId,
                dateOfBirth,
                country,
                area,
                organization,
                backgroundChecks,
            });

            await newUser.save();
            res.status(201).json({message: "User registered successfully", user: newUser});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static getAllUsers = async (req, res, next) => {
        try {
            const result = await user.find()

            if (!result || result.length === 0) {
                return res.status(404).json({message: "Sorry, no lawyer is available."});
            }
            res.status(200).json(result);
        } catch (err) {
            console.error('Error in getAllLawyers:', err); // Log errors
            next(createError(500, 'Internal Server Error'));
        }
    };

    //delete user==========================================
    static deleteDocById = async (req, res, next) => {
        try {
            const result = await user.findByIdAndDelete(req.params.id);

            if (!result) {
                return res.status(404).json({message: "Document not found"});
            }

            res.status(200).json({message: "Document deleted successfully"});
        } catch (error) {
            next(error);
        }
    };


    //========================================================
    static get_all_information = async (req, res) => {
        try {
            const users = await user.find();
            const attorneys = await lawyerModel.find();
            const transactions = await Payment.find();

            res.status(200).send({
                users: users.length > 0 ? users : 0,
                attorneys: attorneys.length > 0 ? attorneys : 0,
                transactions: transactions.length > 0 ? transactions : 0,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send({
                message: 'An error occurred while fetching data',
                error: error.message
            });
        }
    };

}

export default UserController;

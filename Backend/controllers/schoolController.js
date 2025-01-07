import { School } from "../models/schoolModel.js";

class schoolController {
    static register = async (req, res) => {
        const { schoolName, country, area, email, phone, firstName, lastName, role, password } = req.body;

        try {
            // Check if school with this email already exists
            const existingSchool = await School.findOne({ email });
            if (existingSchool) {
                return res.status(400).json({ error: "School with this email already exists." });
            }

            // Create a new school
            const newSchool = new School({ schoolName, country, area, email, phone, firstName, lastName, role, password });
            await newSchool.save();

            res.status(201).json({ message: "School registered successfully!", school: newSchool });
        } catch (error) {
            res.status(500).json({ error: "Server error" });
        }
    };
}

export default schoolController;

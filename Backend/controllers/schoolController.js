import {School} from "../models/schoolModel.js";
import Job from "../models/jobModel.js";
import JobApplied from "../models/appliedJob.js";

class schoolController {
    static register = async (req, res) => {
        const {schoolName, country, area, email, phone, firstName, lastName, role, password} = req.body;

        try {
            // Check if school with this email already exists
            const existingSchool = await School.findOne({email});
            if (existingSchool) {
                return res.status(400).json({error: "School with this email already exists."});
            }

            // Create a new school
            const newSchool = new School({
                schoolName,
                country,
                area,
                email,
                phone,
                firstName,
                lastName,
                role,
                password
            });
            await newSchool.save();

            res.status(201).json({message: "School registered successfully!", school: newSchool});
        } catch (error) {
            res.status(500).json({error: "Server error"});
        }
    };

    static addJob = async (req, res) => {
        const {
            title,
            schoolId,
            coverFrom,
            coverTo,
            payPerDay,
            payPerHour,
            currency,
            timeStart,
            timeEnd,
            paymentMethod,
            qualifications,
            backgroundChecks,
            jobDurationDays,
            jobDurationType,
            description,
        } = req.body;

        try {
            // Check if the school exists
            const school = await School.findById(schoolId);
            if (!school) {
                return res.status(404).json({error: "School not found."});
            }
            const schoolName = school.schoolName
            const location = school.area

            // Create a new job
            const newJob = new Job({
                title,
                schoolName,
                schoolId,
                coverFrom,
                coverTo,
                payPerDay,
                payPerHour,
                currency,
                timeStart,
                timeEnd,
                paymentMethod,
                location,
                qualifications,
                backgroundChecks,
                jobDurationDays,
                jobDurationType,
                description,
            });

            await newJob.save();

            res.status(201).json({message: "Job added successfully!", job: newJob});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "Server error"});
        }
    };

    static getJob = async (req, res) => {
        try {
            const jobs = await Job.find({}); // Replace `Job` with your Mongoose model name

            if (!jobs || jobs.length === 0) {
                return res.status(404).json({message: "No jobs found"});
            }

            res.status(200).json(jobs);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    };

     static getappliedcandidate = async (req, res) => {
        try {
            const jobs = await JobApplied.find({});

            if (!jobs || jobs.length === 0) {
                return res.status(404).json({message: "No applied candidate found"});
            }
            res.status(200).json(jobs);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    };


}

export default schoolController;

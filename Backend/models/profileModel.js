import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        location: {
            type: String,
            trim: true,
        },
        bio: {
            type: String,
            trim: true,
        },
        skills: {
            type: [String], // Array of strings to list multiple skills
            default: [],
        },
        education: [
            {
                degree: { type: String, trim: true },
                institution: { type: String, trim: true },
                year: { type: Number },
            },
        ],
        workHistory: [
            {
                position: { type: String, trim: true },
                company: { type: String, trim: true },
                startDate: { type: Date },
                endDate: { type: Date }, // Nullable for ongoing work
            },
        ],
        availability: {
            availableDays: {
                type: [String], // Array of days, e.g., ["Monday", "Wednesday"]
                default: [],
            },
        },
        profilePicture: {
            type: String, // URL of the uploaded profile picture
            trim: true,
            default: '', // Optional: Set a default image URL
        },
    },
    {
        timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
    }
);

export default mongoose.model('Profile', profileSchema);

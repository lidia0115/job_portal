const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    aboutYou: {
        type: String,
        required: true
    },
    highestQualification: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        enum: ['Full Time', 'Part Time', 'Contract', 'Internship'],
        default: 'Full Time'
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Employed', 'Unemployed'],
        default: 'Unemployed'
    }
});

const Resume = mongoose.model("resumes", resumeSchema);

module.exports = Resume;
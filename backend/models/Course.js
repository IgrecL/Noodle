const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    shortTitle: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    UE: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    authors: {
        type: String,
    }
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
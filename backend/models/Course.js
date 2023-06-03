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
    }
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
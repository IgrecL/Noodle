const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    },
    main: {
        type: Boolean,
        required: true,
        default: false,
    },
    shortTitle: {
        type: String,
        required: true,
    }
});

const Link = mongoose.model("Link", LinkSchema);
module.exports = Link;
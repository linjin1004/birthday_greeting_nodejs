const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    First_Name: {
        type: String
    },
    Last_Name: {
        type: String
    },
    Gender: {
        type: String,
        enum: ["Female", "Male"]
    },
    Date_of_Birth: {
        type: Date
    },
    Email: {
        type: String
    }
});

const personModel = mongoose.model('person', personSchema);

module.exports = personModel;

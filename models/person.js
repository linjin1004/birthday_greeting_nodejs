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
        type: String
    },
    Email: {
        type: String
    }
});

/* // parse date before save to db
personSchema.pre('save',
    async function(next) {
        if (this.isNew) {
            
        }
        next();
    }
);
*/
const personModel = mongoose.model('person', personSchema);

module.exports = personModel;

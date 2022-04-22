const personModel = require("../models/person");

const simpleMessage = ((req, res) => {
    personModel.find({}, function(err, people){
        console.log(people);
        res.status(200).json(people);
    })
});

module.exports = {
    simpleMessage,
}
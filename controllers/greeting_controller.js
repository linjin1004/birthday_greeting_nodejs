const personModel = require("../models/person");
const moment = require('moment');

const simpleMessage = ((req, res) => {
    // assume today is 8/8
    personModel.find({
        $and: [
            { $expr: {$eq: [{ $month: "$Date_of_Birth" }, 8]}},
            { $expr: {$eq: [{ $dayOfMonth: "$Date_of_Birth" }, 8]}}
        ]}, 
        function(err, people){
            let result_array = [];
            console.log(err)
            people.forEach(p => {
                let message = `Subject: Happy birthday!\nHappy birthday, dear ${p.First_Name}!`;
                console.log(message)
                result_array.push(message);
            });
            res.status(200).json({result_array});
        }
    );
});

const messageForDifferentGender = ((req, res) => {
    // assume today is 8/8
    let male_msg = 'We offer special discount 20% off for the following items:\nWhite Wine, iPhone X';
    let female_msg = 'We offer special discount 50% off for the following items:\nCosmetic, LV Handbags';
    personModel.find({
        $and: [
            { $expr: {$eq: [{ $month: "$Date_of_Birth" }, 8]}},
            { $expr: {$eq: [{ $dayOfMonth: "$Date_of_Birth" }, 8]}}
        ]}, 
        function(err, people){
            let result_array = [];
            people.forEach(p => {
                let message = `Subject: Happy birthday!\nHappy birthday, dear ${p.First_Name}!\n`;
                if(p.Gender == 'Male'){
                    message += male_msg;
                } else if (p.Gender == 'Female'){
                    message += female_msg;
                }
                console.log(message);
                result_array.push(message);
            });
            res.status(200).json({result_array});
        }
    );
});

module.exports = {
    simpleMessage,
    messageForDifferentGender,
}
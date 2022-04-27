const personModel = require("../models/person");
const moment = require('moment');
const mysql = require('mysql2');

const simpleMessage = ((req, res) => {
    // assume today is 8/8
    personModel.find({
        $and: [
            { $expr: {$eq: [{ $month: "$Date_of_Birth" }, 8]}},
            { $expr: {$eq: [{ $dayOfMonth: "$Date_of_Birth" }, 8]}}
        ]}, 
        function(err, people){
            let result_array = [];
            people.forEach(p => {
                let message = { title: 'Subject: Happy birthday!', content: `Happy birthday, dear ${p.First_Name}!`};
                console.log(message)
                result_array.push(message);
            });
            return res.status(200).json({result_array});
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
                let message = { title: 'Subject: Happy birthday!', content: ''};
                if(p.Gender == 'Male'){
                    message.content = `Happy birthday, dear ${p.First_Name}!\n${male_msg}`
                } else if (p.Gender == 'Female'){
                    message.content = `Happy birthday, dear ${p.First_Name}!\n${female_msg}`
                }
                console.log(message);
                result_array.push(message);
            });
            return res.status(200).json({result_array});
        }
    );
});

const messageWithElderPic = ((req, res) => {
    // find whose age is over 49
    let now = moment.utc();
    let forty_nine_years_ago = now.subtract(49, 'years');
    personModel.find({ Date_of_Birth: {$lt: forty_nine_years_ago }}, function(err, people){
            let result_array = [];
            people.forEach(p => {
                let message = { title: 'Subject: Happy birthday!', content: `Happy birthday, dear ${p.First_Name}!\n(A greeting picture here)`};
                console.log(message);
                result_array.push(message);
            });
            return res.status(200).json({result_array});
        }
    );
});

const messageWithFullName = ((req, res) => {
    // assume today is 8/8
    personModel.find({
        $and: [
            { $expr: {$eq: [{ $month: "$Date_of_Birth" }, 8]}},
            { $expr: {$eq: [{ $dayOfMonth: "$Date_of_Birth" }, 8]}}
        ]}, 
        function(err, people){
            let result_array = [];
            people.forEach(p => {
                let message = { title: 'Subject: Happy birthday!', content: `Happy birthday, dear ${p.Last_Name}, ${p.First_Name}!`};
                console.log(message)
                result_array.push(message);
            });
            return res.status(200).json({result_array});
        }
    );
});

const database_changes = ((req, res) => {
    // connect to mysql
    const mysql_user = 'root'; // should not be here. should move to config file and not push to git
    const mysql_pw = 'root'; // should not be here. should move to config file and not push to git

    var con = mysql.createConnection({
        host: 'localhost',
        user: mysql_user,
        password: mysql_pw,
        database: 'bday_greeting'
    });

    con.connect(function(err) {
        if (err){
            return res.status(500).json(err);
        } else {
            // assume today is 8/8
            let sql_statement = "SELECT * FROM people WHERE MONTH(Date_of_Birth)='08' and DAY(Date_of_Birth)='08'"
            con.query(sql_statement, function (err, results, fields) {
                if (err){
                    return res.status(500).json(err);
                }
                let result_array = [];
                results.forEach(p => {
                    let message = { title: 'Subject: Happy birthday!', content: `Happy birthday, dear ${p.First_Name}!`};
                    console.log(message)
                    result_array.push(message);
                });
                return res.status(200).json({result_array});
            });
        }        
    });
});

const messageInXml = ((req, res) => {
    let result = `<?xml version="1.0" encoding="UTF-8"?><root>`;
    // assume today is 8/8
    personModel.find({
        $and: [
            { $expr: {$eq: [{ $month: "$Date_of_Birth" }, 8]}},
            { $expr: {$eq: [{ $dayOfMonth: "$Date_of_Birth" }, 8]}}
        ]}, 
        function(err, people){
            people.forEach(p => {
                let xml_content = `<title>Subject: Happy birthday!</title><content>Happy birthday, dear ${p.First_Name}!</content>`; 
                console.log(xml_content)
                result = result + xml_content;
            });
            result = result + '</root>';
            res.header("Content-Type", "text/xml");
            console.log(result);
            return res.status(200).send(result);
        }
    );
})

module.exports = {
    simpleMessage,
    messageForDifferentGender,
    messageWithElderPic,
    messageWithFullName,
    database_changes,
    messageInXml
}
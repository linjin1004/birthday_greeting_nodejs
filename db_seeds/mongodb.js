const personModel = require("../models/person");
const { personData } = require("./seed_data");

const creatPersonSeeds = (() => {
    personModel.countDocuments({}, function(err, count) {
        if(count == 0){ // create seed data
            personModel.insertMany(personData, function(err) {
                if(err){
                    console.log(err);
                }
                console.log('mongo db seed data created');
            });
        }/* else { // to clean data
            personModel.deleteMany({}, function(count){
                personModel.insertMany(personData, function(err) {
                    if(err){
                        console.log(err);
                    }
                    console.log('mongo db seed data created');
                });
            });
        }*/
        console.log('mongo db seed data already exists');
    });
});

module.exports = {
    creatPersonSeeds
}
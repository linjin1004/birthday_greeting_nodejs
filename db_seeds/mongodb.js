const personModel = require("../models/person");
const { personData } = require("./seed_data");

const creatPersonSeeds = (() => {
    personModel.countDocuments({}, function(err, count) {
        if(count == 0){ // create seed data
            createData();
        } else { 
            console.log('mongo db seed data already exists');
            // to clean data
            personModel.deleteMany({}, function(count){
                createData()
            });
        }
    });
});

function createData(){
    console.log('mongo db seed data creating');
    personData.forEach(p => {
        //console.log(p);
        let date_array = p.Date_of_Birth.split('/');
        let utc_time = new Date(p.Date_of_Birth);
        utc_time.setUTCFullYear(date_array[0]);
        utc_time.setUTCMonth(date_array[1]-1);
        utc_time.setUTCDate(date_array[2]);
        p.Date_of_Birth = utc_time;
        new personModel(p).save();
    });
}

module.exports = {
    creatPersonSeeds
}
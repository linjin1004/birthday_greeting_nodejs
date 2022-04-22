const express = require('express');
const app = express();
const port = 3000;

// mongo db and mongoose 
const mongoose = require('mongoose');
const db_host = 'localhost';
const db_port = 27017;
const db_name = 'bday_greeting';
mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`, 
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
        console.log('mongo db connected');
        // seed db
        const db_seed = require('./db_seeds/mongodb');
        db_seed.creatPersonSeeds(); 
    }
).catch((err) => {
        console.log(err);
    }
);
mongoose.connection.on('error', err => {
    console.log('mongo db connection error: ' + err.message);
});
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.get('/robots.txt', (req, res) => {
    res.send("User-agent: *\nDisallow: /");
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// set routes
const routes = require('./routes/greeting_route');
app.use('/', routes); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
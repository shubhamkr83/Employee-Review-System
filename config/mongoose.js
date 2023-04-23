const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config()

mongoose.connect(process.env.URL);

const db = mongoose.connection;

//if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));

// server is up then run a message 
db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})
module.export = db;
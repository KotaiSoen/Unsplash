const mongoose = require('mongoose');
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected to the database'));

module.exports = mongoose;
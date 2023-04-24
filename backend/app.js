const express = require('express');
const app = express();
const cors = require('cors');

//the mongoDB config file
require('./db/mongoose');

//dist folder
var distDir = __dirname + "/dist";
app.use(express.static(distDir));

//the image route config file
const imageRoute = require('./routes/image');

//json parser
app.use(express.json());

//cors middleware
app.use(function (req, res, next) {
    res.header('credentials', 'include');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//route middleware
app.use('/images', imageRoute);

//server connection 
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})





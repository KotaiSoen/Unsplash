const express = require('express');
const app = express();
const cors = require('cors');

//the mongoDB config file
require('./db/mongoose');

//the image route config file
const imageRoute = require('./routes/image');

//json parser
app.use(express.json());

//cors middleware
app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200,
}));

//route middleware
app.use('/images', imageRoute);

//server connection 
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})





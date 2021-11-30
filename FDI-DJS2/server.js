const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const userRegisterRoute = require('./ROUTES/USER/User');
const postRoute = require('./ROUTES/Post/Post');
dotenv.config({path: './CONFIGURATION/.env'});
require('./CONFIGURATION/MongoDbConnect');

//body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api/user', userRegisterRoute);
app.use('/api/post', postRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
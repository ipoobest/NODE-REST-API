const express = require('express');
const bodyParser = require('body-parser');

const app = express()


// parse request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//COnfig db 
const config = require('./config');
const mongoose = require('mongoose');
require('./routers')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



//test
app.get('/test', (req,res) => {
    res.json({"message": "helloworld 555555"})
    // res.send('hellodddworld 55555')
})

// routes
// app.use('/', require('./routes/index'))

app.listen(3000, () => {
    console.log('node start port 3000')
})
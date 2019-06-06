const express = require('express')
const bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;

const app = express()

// parse request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var url = "mongodb://mongo:27017/mydb";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


app.get('/test', (req,res) => {
    res.json({"message": "helloworld 555555"})
    // res.send('hellodddworld 55555')
})

app.listen(3000, () => {
    console.log('node start port 3000')
})
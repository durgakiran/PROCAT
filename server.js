const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
let Dictionary = require('./api');
let news = require('./API/news');
let Parser = require('rss-parser');
let scheduler = require('./API/scheduler');

let parser = new Parser();
  
  var app_id = "efb9aa52";
  var app_key = "f519fb94cfae5a96a3d440b8ac236d00";
  
  var dict = new Dictionary(app_id,app_key);

  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//mongoose.connect(envars.MONGO_URI, {useMongoClient: true/* other options */});
//console.log(mongoose.connection.readyState);

// Send all other requests to the Angular app
app.get('/api/search/:word', (req,res) => {
    dict.find("ace",function(error,data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
    
});
//get news feed   
app.get('/api/news', (req,res) => {
    news.getHinduEditorialFeed(function(feed){
        console.log(JSON.stringify(feed));
        res.end(JSON.stringify(feed));
    });
});

app.get('*', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
app.listen(3000, function(){
    //scheduler.job1();
    //console.log(scheduler.job1.status);
});
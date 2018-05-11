//job runner
'use strict'
let cron = require('cron');
let news = require('./news');

function runJobs(){
    news.getHinduEditorialFeed();
}

module.exports ={
      job1 : function(){
          new cron.CronJob({
          cronTime: '00 30 5 * * 0-6',
          onTick: function() {
            runJobs();
          },
          start: true,
          timeZone: 'Asia/Kolkata',
          runOnInit: true,
        });
    }
}
 

 
 
//console.log('job1 status', job1.running); // job1 status undefined
 
//job1.start(); // job 1 started
 
//console.log('job1 status', job1.running); // job1 status true
//news api
let Parser = require('rss-parser');

module.exports = {
    getHinduEditorialFeed : function(cb){
                               let parser = new Parser();
                               (async () => {
                               let feed = await parser.parseURL('http://www.thehindu.com/opinion/editorial/feeder/default.rss');
                               console.log(feed.title);
                               cb(feed);
                               feed.items.forEach(item => {
                                    console.log(item.title + ': ' + item.link);
                               });
                               })();
                          }
};


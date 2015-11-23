var http = require('http');
var sitename = 'https://mikewuwebsite.herokuapp.com';
var mindiff = 45;

// Function to ping Heroku every once in a while.
function keeplive() {
    setInterval(function() {
        http.get(sitename);
    }, mindiff * 60 * 1000); // every 45 minutes
}

module.exports = {
  keeplive: keeplive
}

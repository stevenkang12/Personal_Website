'use strict';

var app = require('./app.js');

// Get config variables
var port = process.env.PORT || 3500;
var host = process.env.IP;

// Start the server
app.listen(port, function() {
    console.log('Your app is running on PORT ', port);
});

'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var homeControllers = require('./controllers/home.js');
var aboutControllers = require('./controllers/about.js');
// var projectsControllers = require('./controllers/projects.js');

// Create our express app
var app = express();

// Configure it
configure(app);

// Keep heroku alive
var wakeup = require('./wakeup.js');
wakeup.keeplive();

// Add routes mapping URLs to controllers
app.get('/', homeControllers.index);
app.get('/about', aboutControllers.about);
// app.get('/projects', projectsControllers.listProjects);

// Additional random ones.
// app.get('/resume', randomControllers.resume);

module.exports = app;

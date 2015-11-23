'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var researchControllers = require('./controllers/research.js');
var projectsControllers = require('./controllers/projects.js');
var jobsControllers = require('./controllers/jobs.js');
var talksControllers = require('./controllers/talks.js');
var doodlesControllers = require('./controllers/doodles.js');
var randomControllers = require('./controllers/random.js');

// Create our express app
var app = express();

// Configure it
configure(app);

// Keep heroku alive
var wakeup = require('./wakeup.js');
wakeup.keeplive();

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/research', researchControllers.listResearch);
app.get('/projects', projectsControllers.listProjects);
app.get('/jobs', jobsControllers.listJobs);
app.get('/talks', talksControllers.listTalks);
app.get('/doodles', doodlesControllers.listDoodles);

// Additional random ones.
app.get('/resume', randomControllers.resume);
app.get('/deepdemo', randomControllers.deepdemo);
app.get('/deepvideo', randomControllers.deepvideo);

module.exports = app;

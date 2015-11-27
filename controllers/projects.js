'use strict';

var projects = require('../models/projects');
var links = require('../models/layout');

/* Controller that renders the about page. */
function listProjects (request, response) {
  var indexData = {
    'projects': projects.all.sort(function(a, b){ return a.id - b.id; }).reverse(),
    'title': 'Projects',
    'name'  : 'Steven Kang',
    'links' : links.all
  };
  response.render('projects.html', indexData);
}

module.exports = {
  listProjects: listProjects,
};

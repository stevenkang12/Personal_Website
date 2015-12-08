'use strict';
var links = require('../models/layout');

/* Controller that renders the about page. */
function resume (request, response) {
  var contextData = {
    'title' : 'Resume',
    'name'  : 'Steven Kang',
    'links' : links.all
  };
  response.render('resume.html', contextData);
}

module.exports = {
  resume : resume
};
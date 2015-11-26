'use strict';

var links = require('../models/layout'); // this is for the menu bar

/* Controller that renders the about page. */
function about (request, response) {
  var indexData = {
    'title' : 'About',
    'name'  : 'Steven Kang',
    'links' : links.all
  };
  response.render('about.html', indexData);
}

module.exports = {
  about: about
};

'use strict';

var links = require('../models/layout');

/* Controller that renders our index (home) page. */
function index (request, response) {
  var indexData = {
    'title' : "Home",
    'name'  : 'Steven Kang',
    'links' : links.all
  };
  response.render('index.html', indexData);
}

module.exports = {
  index: index
};

var angular = require('angular');
require('angular-route');
require('jquery'); // Material needs jquery
require('angular-material');

// Require directory only so browserify can search for the index.js file by default and require it's dependencies
require('./controllers/index');
require('./routes/index');
require('./services/index');

angular.module('fitHeart', ['ngMaterial', 'ngRoute', 'frontEndRoutes', 'MainCtrl', 'UserCtrl', 'UserService']);
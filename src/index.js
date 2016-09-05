var angular = require('angular');
require('angular-ui-router');
var routesConfig = require('./routes');

var login = require('./app/login/login');
var signup = require('./app/signup/signup');
var header = require('./app/core/header');
var footer = require('./app/core/footer');

require('./index.scss');

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('appHeader', header)
  .component('appFooter', footer)
  .component('login', login)
  .component('signup', signup);

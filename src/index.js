var angular = require('angular');
require('angular-ui-router');
var routesConfig = require('./routes');
//var authService = require('./service');
var login = require('./app/login/login');
var signup = require('./app/signup/signup');
var home = require('./app/home/home');
var header = require('./app/core/header');
var footer = require('./app/core/footer');

require('./index.scss');

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
//  .factory("authService",authService)
  .component('appHeader', header)
  .component('appFooter', footer)
  .component('login', login)
  .component('signup', signup)
  .component('home', home);

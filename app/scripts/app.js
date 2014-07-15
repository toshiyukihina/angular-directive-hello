'use strict';

angular
  .module('angularDirectiveHelloApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('helloTemplateCache.html', '<div>Hello, cached template.</div>');
  }]);

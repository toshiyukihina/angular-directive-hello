'use strict';

angular.module('angularDirectiveHelloApp')
  .directive('hello', function () {
    return {
      templateUrl: 'views/partials/helloTemplate.html',
      restrict: 'E',
      replace: true
    };
  });

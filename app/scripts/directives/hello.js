'use strict';

angular.module('angularDirectiveHelloApp')
  .directive('hello', function () {
    return {
      templateUrl: 'helloTemplateCache.html',
      restrict: 'E',
      replace: true
    };
  });

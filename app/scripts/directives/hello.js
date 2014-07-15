'use strict';

angular.module('angularDirectiveHelloApp')
  .directive('hello', function () {
    return {
      template: '<div>Hello, angular directive.</div>',
      restrict: 'E',
      replace: true
    };
  });

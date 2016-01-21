// script.js
angular.module('HelloWorld', [])
  .controller('HelloWorldController', ['$scope', function($scope) {
    $scope.greetings = "Hello World from Angular JS";
  }]);
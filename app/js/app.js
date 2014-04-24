angular.module('myapp', ['ui.bootstrap']);

angular.module('myapp').factory('GreetService', [
function () {
  'use strict';

  return {
    greet: function(name) {
      return 'Hello, ' + name + '!';
    }
  };
}]);

angular.module('myapp').controller('AppController', ['$scope', 'GreetService',
function ($scope, SimpleService) {
  'use strict';

  $scope.title = 'MyApp';
  $scope.message = SimpleService.greet('world');
}]);

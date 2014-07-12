angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $http, $timeout) {
  $scope.message = "Call Heimdall";
  $scope.doOpenDoor = function() {
    $scope.message = 'Calling Heimdall...';
    $http.post('http://192.168.1.201/open-door', {}, {timeout: 2500})
      .success(function(data){
        $scope.message = 'Bifrost is open for<br>5 sec.';
        $timeout(function () {
          $scope.message = "Call Heimdall";
        }, 5000);
      })
      .error(function(data, status, headers, config){
        $scope.message = 'Unfortunately<br> He is sleeping';
      });
  };
});
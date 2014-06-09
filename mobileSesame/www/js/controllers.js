angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.message = "";
  $scope.doOpenDoor = function() {
    $scope.message = 'Trying, opening door locally.';
    console.log('Open the fucking door');
    $http.post('http://192.168.1.201/open-door', {}, {timeout: 2500})
      .success(function(data){
        $scope.message = 'The door was opened successfully.';
      })
      .error(function(data, status, headers, config){
        $scope.message = 'Trying, opening door over the Internet.';
        $http.post('http://118.91.181.252/open-door', {})
          .success(function(data){
            console.log('Door was opened over the Internet.');
            $scope.message = 'Door was opened over the Internet.';
          })
          .error(function(data){
            console.log(data);
            $scope.message = 'Pi must be sleeping.';
          })
      });
  };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('SettingsCtrl', function($scope) {
});

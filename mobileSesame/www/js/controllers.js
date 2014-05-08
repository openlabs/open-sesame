angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.doOpenDoor = function() {
    console.log('Open the fucking door');
    $http.post('http://192.168.1.201/open-door', {})
    .success(function(data){
      console.log('The door was opened successfully');
    })
    .error(function(data, status, headers, config){
      console.log('There was an error in opening');
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

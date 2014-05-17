angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.doOpenDoor = function() {
    console.log('Open the fucking door');
    if (!localStorage.getItem('piPath')) {
      alert("Add path to Pi in settings tab.");
      return;
    }
    $http.post('http://' + localStorage.getItem('piPath') + '/open-door', {})
    .success(function(data){
      console.log('The door was opened successfully');
    })
    .error(function(data, status, headers, config){
      console.log('There was an error in opening');
      alert("Wrong configuration or Pi not ready.");
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
  $scope.settings = {};
  $scope.settings.piPath = localStorage.getItem('piPath');
  $scope.savePath = function () {
    localStorage.setItem('piPath', $scope.settings.piPath);
    $scope.message = "Saved";
  };
});

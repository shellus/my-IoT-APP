angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MyController', function ($scope, $http) {

    $scope.devices = {
        neo_pixel: {
            'photo': 'img/devices/neo_pixel.jpg',
            'name': "彩灯条1",
            'description': "彩色灯条，照亮彩色心情.",
            'route': "index.ws28"
        },
        access_switch: {
            'photo': 'img/devices/access_switch.jpg',
            'name': "门禁开关1",
            'description': "手指轻点，门就开了",
            'route': "index.device"
        }
    };
    $scope.doRefresh = function(){
        $scope.$broadcast('scroll.refreshComplete');
    }
}).controller('Ws28Ctrl', function ($scope, $http) {

});
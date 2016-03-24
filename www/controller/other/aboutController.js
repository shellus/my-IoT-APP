/**
 * Created by shellus on 2016-03-24.
 */
angular.module('starter.controllers').controller('other/AboutController', function ($scope, $http) {

    $scope.devices = {
        neo_pixel: {
            'photo': 'img/devices/neo_pixel.jpg',
            'name': "彩灯条1",
            'description': "彩色灯条，照亮彩色心情."
        },
        access_switch: {
            'photo': 'img/devices/access_switch.jpg',
            'name': "门禁开关1",
            'description': "手指轻点，门就开了"
        },
    };
    $scope.doRefresh = function(){
        $scope.$broadcast('scroll.refreshComplete');
    }
});
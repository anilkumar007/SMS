// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('SmsCtrl', ['$scope','$ionicPlatform','$cordovaSms', function ($scope,$ionicPlatform,$cordovaSms) {
  console.log('enetered in ctrl');
  $scope.form={};
  $scope.sendSms = function(){
    console.log($scope.form.number);
    console.log($scope.form.message);
     var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };
    $ionicPlatform.ready(function(){
      $cordovaSms
      .send($scope.form.number, $scope.form.message, options)
      .then(function(result) {
        console.log(result);
        
      }, function(error) {
        console.log(error);
      })
    })
  }
  
}])

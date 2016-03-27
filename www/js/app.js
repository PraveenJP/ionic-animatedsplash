// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordova'])

app.run(function($ionicPlatform,$location,$cordovaToast,$timeout) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  var backbutton = 0;
  $ionicPlatform.registerBackButtonAction(function() {
      if ($location.path() === "/home") {
        if(backbutton == 0){
          backbutton++;
          $cordovaToast.showLongBottom('Press again to exit');
          // $timeout(function(){
          //   backbutton=1;
          // },5000);
        }else{
          navigator.app.exitApp();
        }
      }else{
        $ionicHistory.goBack();
      }
  }, 100);

})

app.config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider){

  //$ionicConfigProvider.scrolling.jsScrolling(true);

  $stateProvider
  .state('splash',{
    url:'/splash',
    templateUrl:'splash.html',
    controller : 'splashCtrl'
  })

  .state('home',{
    url:'/home',
    templateUrl:'home.html'
  });

  $urlRouterProvider.otherwise('/splash');

});

app.controller('splashCtrl',function($timeout,$scope,$state,$ionicHistory){
  $timeout(function(){
    $state.go('home');
  },15000);
  //$ionicHistory.clearHistory();
})

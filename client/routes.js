angular.module('pickem').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('matchday1', {
        url:'/matchday-1',
        templateUrl: 'client/picks/views/matchday-1.ng.html',
        controller: 'PickemCtrl'
      })

      .state('matchday2', {
        url:'/matchday2',
        templateUrl: 'client/picks/views/matchday-2.ng.html',
        controller: 'PickemCtrl'
      })

      .state('matchday3', {
        url:'/matchday3',
        templateUrl: 'client/picks/views/matchday-3.ng.html',
        controller: 'PickemCtrl'
      })

      .state('matchday4', {
        url:'/matchday4',
        templateUrl: 'client/picks/views/matchday-4.ng.html',
        controller: 'PickemCtrl'
      })

      .state('matchday5', {
        url:'/matchday5',
        templateUrl: 'client/picks/views/matchday-5.ng.html',
        controller: 'PickemCtrl'
      })

      .state('matchday6', {
        url:'/matchday6',
        templateUrl: 'client/picks/views/matchday-6.ng.html',
        controller: 'PickemCtrl'
      })

      .state('matchday7', {
        url:'/matchday7',
        templateUrl: 'client/picks/views/matchday-7.ng.html',
        controller: 'PickemCtrl'
      })

      .state('matchday8', {
        url:'/matchday8',
        templateUrl: 'client/picks/views/matchday-8.ng.html',
        controller: 'PickemCtrl'
      })

      $urlRouterProvider.otherwise('/matchday-1');
  } 

]);
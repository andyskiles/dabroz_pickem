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
      });

      $urlRouterProvider.otherwise('/matchday-1');
  } 

]);
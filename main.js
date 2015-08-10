Matches = new Mongo.Collection('matches');
Picks = new Mongo.Collection('picks');

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  // only runs on client
  angular.module('pickem', [
    'angular-meteor', 
    'ui.router', 
    'ngAnimate'
  ]);

  angular.module('pickem').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('matchday1', {
          url:'/matchday1',
          templateUrl: 'matchday-1.ng.html',
          controller: 'Matchday1Ctrl'
        })

        .state('matchday2', {
          url:'/matchday2',
          templateUrl: 'matchday-2.ng.html',
          controller: 'Matchday2Ctrl'
        })

        .state('matchday3', {
          url:'/matchday3',
          templateUrl: 'matchday-3.ng.html',
          controller: 'Matchday3Ctrl'
        })

        $urlRouterProvider.otherwise('/matchday1');
    } 

  ])

  angular.module('pickem').controller('Matchday1Ctrl', ['$scope', '$stateParams', 
    function($scope, $stateParams){
      $scope.matchdayId = $stateParams.matchdayId;
    }
  ])

  angular.module('pickem')
    .controller('PickemCtrl', ['$scope', '$meteor',
      function ($scope, $meteor) {

        $scope.picks = $meteor.collection(function() {
          return Picks.find($scope.getReactively('query'), {sort: {createdAt: -1}})
        });

        $scope.$watch('doNothing', function() {
          if ($scope.doNothing)
            $scope.query = {there: {$ne: true}};
          else
            $scope.query = {};
        });

        $scope.addPick0 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 0,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick1 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 1,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick2 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 2,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick3 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 3,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick4 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 4,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick5 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 5,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick6 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 6,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick7 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 7,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick8 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 8,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

        $scope.addPick9 = function(newPick) {
          $scope.picks.push( {
            text: newPick,
            createdAt: new Date(),
            id: 9,
            owner: Meteor.userId(),
            username: Meteor.user().username }
          );
        };

      }])

    .animation('.slide', [function() {
      return {
        // make note that other events (like addClass/removeClass)
        // have different function input parameters
        enter: function(element, doneFn) {
          jQuery(element).fadeIn(1000, doneFn);

          // remember to call doneFn so that angular
          // knows that the animation has concluded
        },

        move: function(element, doneFn) {
          jQuery(element).fadeIn(1000, doneFn);
        },

        leave: function(element, doneFn) {
          jQuery(element).fadeOut(1000, doneFn);
        }
      }
    }]);
}

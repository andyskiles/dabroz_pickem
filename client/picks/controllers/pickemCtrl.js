angular.module('pickem')
  .controller('PickemCtrl', ['$scope', '$meteor','$http',
    function ($scope, $meteor, $http) {

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

      $scope.addPick10 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 0,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick11 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 1,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick12 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 2,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick13 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 3,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick14 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 4,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick15 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 5,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick16 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 6,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick17 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 7,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick18 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 8,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick19 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday2: 9,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      // matchday 3

      $scope.addPick20 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 0,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick21 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 1,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick22 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 2,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick23 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 3,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick24 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 4,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick25 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 5,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick26 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 6,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick27 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 7,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick28 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 8,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick29 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday3: 9,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

}]);
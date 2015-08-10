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

}]);
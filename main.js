Tasks = new Mongo.Collection('tasks');
Matches = new Mongo.Collection('matches');
Picks = new Mongo.Collection('picks');

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  // only runs on client
  angular.module('pickem', ['angular-meteor']);

  angular.module('pickem').controller('PickemCtrl', ['$scope', '$meteor',
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

      $scope.addPick = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick2 = function(newPick2) {
        $scope.picks.push( {
          text: newPick2,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

    }]);
}

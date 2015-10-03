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

      $scope.addPick30 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 0,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick31 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 1,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick32 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 2,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick33 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 3,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick34 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 4,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick35 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 5,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick36 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 6,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick37 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 7,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick38 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 8,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick39 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday4: 9,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick40 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 0,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick41 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 1,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick42 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 2,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick43 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 3,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick44 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 4,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick45 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 5,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick46 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 6,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick47 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 7,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick48 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 8,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick49 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday5: 9,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick50 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 0,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick51 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 1,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick52 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 2,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick53 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 3,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick54 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 4,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick55 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 5,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick56 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 6,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick57 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 7,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick58 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 8,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick59 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday6: 9,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick60 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 0,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick61 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 1,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick62 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 2,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick63 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 3,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick64 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 4,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick65 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 5,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick66 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 6,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick67 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 7,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick68 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 8,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick69 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday7: 9,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick70 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 0,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick71 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 1,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick72 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 2,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick73 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 3,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick74 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 4,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick75 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 5,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick76 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 6,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick77 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 7,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick78 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 8,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

      $scope.addPick79 = function(newPick) {
        $scope.picks.push( {
          text: newPick,
          createdAt: new Date(),
          matchday8: 9,
          owner: Meteor.userId(),
          username: Meteor.user().username }
        );
      };

}]);
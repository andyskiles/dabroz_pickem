angular.module('pickem').factory('weatherService', ['$http', '$q', function ($http, $q){
  function getWeather (city) {

    var deferred = $q.defer();
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + city + '%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
      .success(function(data){
        deferred.resolve(data.query.results.channel);
      })
      .error(function(err){
        console.log('Error retrieving markets');
        deferred.reject(err);
      });
    return deferred.promise;
  }
  
  return {
    getWeather: getWeather
  };
}]);

angular.module('pickem').controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {

  function fetchWeather(city) {
    weatherService.getWeather(city).then(function(data){
      $scope.place = data;
    }); 
  }

  $scope.londonWeather = function(city) {
    $scope.place = '';
    fetchWeather('London');
  }

  $scope.afcBournemouthWeather = function(city) {
    $scope.place = '';
    fetchWeather('Bournemouth');
  }

  $scope.astonVillaWeather = function(city) {
    $scope.place = '';
    fetchWeather('Birmingham');
  }

  $scope.leicesterCityWeather = function(city) {
    $scope.place = '';
    fetchWeather('Leicester');
  }

  $scope.liverpoolWeather = function(city) {
    $scope.place = '';
    fetchWeather('Liverpool');
  }

  $scope.manchesterWeather = function(city) {
    $scope.place = '';
    fetchWeather('Manchester');
  }

  $scope.newcastleUnitedWeather = function(city) {
    $scope.place = '';
    fetchWeather('Newcastle');
  }

  $scope.norwichCityWeather = function(city) {
    $scope.place = '';
    fetchWeather('Norwich');
  }
  
  $scope.southamptonWeather = function(city) {
    $scope.place = '';
    fetchWeather('Southampton');
  }

  $scope.stokeCityWeather = function(city) {
    $scope.place = '';
    fetchWeather('Stoke');
  }

  $scope.sunderlandWeather = function(city) {
    $scope.place = '';
    fetchWeather('Sunderland');
  }

  $scope.swanseaCityWeather = function(city) {
    $scope.place = '';
    fetchWeather('Swansea');
  }

  $scope.watfordWeather = function(city) {
    $scope.place = '';
    fetchWeather('Watford');
  }

  $scope.westBromWeather = function(city) {
    $scope.place = '';
    fetchWeather('West+Bromwich');
  };
}]);







angular.module('myApp', [
  'ngRoute'
]).config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "start.html",
    name: "Start"
  }).when("/überuns", {
    templateUrl: "about.html",
    name: "AboutUs"
  }).otherwise({
    redirectTo: "/"
  });
}).run(function ($rootScope, $location, $route) {
  $rootScope.$location = $location;
  $rootScope.$route = $route;
  $rootScope.keys = Object.keys;
});

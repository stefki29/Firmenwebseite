angular.module('myApp').directive('navigation', function (routeNavigation) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "navigation-directiv.tpl.html",
      controller: function ($scope) {
        $scope.routes = routeNavigation.routes;
        $scope.activeRoute = routeNavigation.activeRoute;
      }
    };
  });
  
  
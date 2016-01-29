angular.module('frontEndRoutes', []).config(['$routeProvider', '$locationProvider', function(){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/users', {
           templateUrl: 'views/user.html',
            controller: 'UserController'
        });
    $locationProvider.html5Mode(true);
}]);
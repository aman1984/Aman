// declare modules

var app = angular.module('lasurim', [
    'Controllers',
    'services',
    'directives',
    'ngRoute',
    'ngCookies',
    'ipCookie',
    'ui.router',
    'ngAnimate'
]);
 
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'views/login.html'
        })
 
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .state('about', {
            url: '/about',
            controller: 'AboutController',
            templateUrl: 'views/about.html'
        })
        .state('contact', {
            url: '/contact',
            controller: 'ContactController',
            templateUrl: 'views/contact.html'
        })
        .state('register', {
            url: '/register',
            controller: 'RegisterController',
            templateUrl: 'views/register.html'
        })
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode({
          enabled: true
        });
}]);

app.run(['$rootScope', '$location', 'ipCookie', '$http',
    function ($rootScope, $location, ipCookie, $http) {
        $rootScope.Main_Url = 'http://localhost/lasurim/';
        // keep user logged in after page refresh
       /* $rootScope.Globals = ipCookie('globals') || {};
        if ($rootScope.Globals.currentUser) {
            //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }*/

       /* $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if (($location.path() !== '/login' && $location.path() !== '/register') && !$rootScope.Globals.currentUser) {
                $location.path('/login');
            }
            if($rootScope.Globals.currentUser && $location.path() === '/login'){
                $location.path('home');
            }
        });*/
}]);
var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'mainCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  })
  .state('code', {
    url: '/code',
    templateUrl: 'views/code.html',
    controller: 'CodeCtrl'
  })
  .state('table', {
    url: '/table/:table',
    templateUrl: 'table.html',
    controller: 'tableCtrl'
/*    controller: function($scope, $stateParams) {
            // get the id
            $scope.table = $stateParams.table;
            console.log($scope.table);
          }*/
  })
  $urlRouterProvider.otherwise("/");
});

app.controller('CodeCtrl', ['$scope', 'loginService', function($scope, loginService){
  loginService.loginObj = true;
  $scope.is_logged = loginService.loginObj;
  $scope.test = loginService.dataObj;
  //console.log($scope.logged_in);
}]);

app.controller('mainCtrl', ['$scope', 'loginService', function($scope, loginService){
  //console.log($scope.logged_in);
}]);



app.service('loginService', function($http){
  var _logged_in = {};
  var _dataObj = {};

    this.dataObj = _dataObj;
    this.loginObj = _logged_in;

   this.setLoggedIn = function(){
      logged_in = true;
   }

   this.getLoggedOut = function(){
    logged_in = false;
   }

   this.isLogged = function(){
      return logged_in;
   }
});
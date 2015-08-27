var app = angular.module('Controllers', []);

app.controller('LoginController', ['$scope', '$http', '$location', '$rootScope', 'ipCookie', 'ipCookie', 'registerAndAuth', function($scope, $http, $location, $rootScope, ipCookie, ipCookie, registerAndAuth){
   /* $scope.dataLoading = false;
    if(typeof $rootScope.Globals!== 'undefined' && $rootScope.Globals.hasOwnProperty("username")){
        $location.path('home');
    }*/
    /*$scope.login = function(){
        $scope.dataLoading = true;
         registerAndAuth.login($scope.username, $scope.password, function(data){
            if(data.success=="true"){
                $rootScope.Globals = {
                    currentUser:{
                        user_id : data.data.user_id,
                        email_id : data.data.email_id,
                        username : data.data.username,
                        fullname : data.data.fullname
                    }
                };
                // ipCookie.put('globals', $rootScope.Globals);
                ipCookie('globals', $rootScope.Globals);
                $location.path('home');
            }else{
                $scope.error = 'incorrect username or password';
            }
            $scope.dataLoading = false;
        });
    }*/
}]);

app.controller('HomeController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);

app.controller('AboutController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);

app.controller('ContactController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);

app.controller('RegisterController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){
    /*console.log($rootScope.Main_Url);   
    $scope.dataLoading = false;
    $scope.register = function(){
        $scope.dataLoading = true;
        $scope.register_user = registerAndAuth.register($scope.fullname, $scope.username, $scope.email, $scope.password, function(data){
            if(data.success=="true"){
                alert(data.message);
                $location.path('/login');
            }else{
                alert(data.message);
            }
            $scope.dataLoading = false;
        });
    }*/

}]);
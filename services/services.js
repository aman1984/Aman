var app = angular.module('services', []);

app.factory('registerAndAuth', ['$http', '$rootScope', function($http, $rootScope){
/*
	this.register = function(fullname, username, email, password){
		$http({
			method: 'POST',
			url: $rootScope.Main_Url+'register.php',
			data: 'fullname='+fullname+'&username='+username+'&email='+email+'&password='+password,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(function(data){
			return data;
		});
	}*/

	  return {
    register: function (fullname, username, email, password, callback){
      $http({
			method: 'POST',
			url: $rootScope.Main_Url+'register.php',
			data: 'fullname='+fullname+'&username='+username+'&email='+email+'&password='+password,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(callback);
    },
    login: function (username, password, callback){
      $http({
			method: 'POST',
			url: $rootScope.Main_Url+'login.php',
			data: 'username='+username+'&password='+password,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(callback);
    }
  };
}]);

app.factory('codeService', ['$http', '$rootScope', function($http, $rootScope){

	  return {
    addNewCode: function (title, language, code_body, user_id, callback){
      $http({
			method: 'POST',
			url: $rootScope.Main_Url+'addCode.php',
			data: 'title='+title+'&language='+language+'&code_body='+code_body+'&user_id='+user_id,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(callback);
    },
    getSavedCode: function (user_id, callback){
      $http({
			method: 'GET',
			url: $rootScope.Main_Url+'getCode.php?user_id='+user_id,
			//data: 'user_id='+user_id,
			//headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(callback);
    },
    updateCode: function (title, language, code_body, code_id, user_id, callback){
      $http({
			method: 'POST',
			url: $rootScope.Main_Url+'updateCode.php',
			data: 'title='+title+'&language='+language+'&code_body='+code_body+'&code_id='+code_id+'&user_id='+user_id,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(callback);
    }
  };
}]);
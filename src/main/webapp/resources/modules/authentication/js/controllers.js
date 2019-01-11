var authentication = angular.module('Authentication');

authentication.controller('LoginCtrl', ['$scope','$cookieStore', 'AuthenticationService', '$location', function($scope,$cookieStore ,AuthenticationService, $location) {
	$scope.app = {title:"LOGIN",showMenu:false};
    $scope.login = function() {
    	if(false){
        AuthenticationService.authenticate($scope.user, function(response) {
            if (response.data.success) {
                 $scope.user = {activeUser : $scope.user};
                 $cookieStore.put('activeUser',$scope.user);
                 $location.path('/home');
            } else {
                $scope.error = true;
                $scope.errorMsg = "Username or password is incorrect";
            }
        });
    }
    	if($scope.user.username == 'gvrnmnt'){
    		$location.path("/dairyListing");
    	} else {
    		$location.path("/home");
    	}

    }
    
    $scope.forgetPassword = function(){
    	$location.path('/forgetPassword');
    }
}]);


authentication.controller('ForgetPasswordCtrl', ['$scope','$cookieStore', 'AuthenticationService', '$location', function($scope,$cookieStore ,AuthenticationService, $location) {
	$scope.app = {title:"Forget Password",showMenu:false};
    $scope.forget = function() {
    	if(false){
        AuthenticationService.authenticate($scope.user, function(response) {
            if (response.data.success) {
                 $scope.user = {activeUser : $scope.user};
                 $cookieStore.put('activeUser',$scope.user);   
                $location.path('/login');
            } else {
                $scope.error = true;
                $scope.errorMsg = "Username or password is incorrect";
            }
        });
    	}
    	alert("Mail is send to "+$scope.user.email);
    	$location.path('/login');
    }
    
    $scope.back = function(){
    	$location.path('/login');
    }
}]);

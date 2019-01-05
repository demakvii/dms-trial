var profile = angular.module('Profile');
profile.controller('ChangePasswordCtrl', [ '$scope', '$location',
	'$cookieStore', 'AuthenticationService',
	function($scope, $location, $cookieStore, AuthenticationService) {
		$scope.app = {
			title : "Change Password",
			showMenu : true
		};
		$scope.page = {
			searchRights : false,
			addRights : false,
			uploadRights : false,
			currentMenu : "profile",
			editMode : false
		};

		var owner = $cookieStore.get('activeUser');
		if (true) {
			owner = {
				userName : 'Mayur',
				password : 'mayur'
			};
		}
		
		if (owner != null) {
			$scope.activeUser = {
				userName : owner.userName,
				password : owner.password
			};

		} else
			$location.path('/login');
		
		$scope.update = function(){
			$location.path("/logout")
		}
		
		$scope.back = function(){
			$location.path("/home")
		}

	} ]);
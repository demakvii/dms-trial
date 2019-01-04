var profile = angular.module('Profile');
profile.controller('SettingCtrl', [ '$scope', '$location',
	'$cookieStore', 'AuthenticationService',
	function($scope, $location, $cookieStore, AuthenticationService) {
		$scope.app = {
			title : "Settings",
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
		
		$scope.customer = {
				name : "Mayur kalekar",
				mobNo : "8983989899",
				ofcMobNo : "997986875785",
				aadharNo : "vjhjgj87t876",
				email : "m@g.com",
				role : "SA"
		}
		if (owner != null) {
			$scope.activeUser = {
				userName : owner.userName,
				password : owner.password
			};

		} else
			$location.path('/login');
		
		$scope.update = function(){
			$location.path("/home")
		}
		
		$scope.back = function(){
			$location.path("/home")
		}

	} ]);
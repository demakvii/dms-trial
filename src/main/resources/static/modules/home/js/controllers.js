var home = angular.module('Home');
home.controller('MainCtrl', [ '$scope', '$location', '$cookieStore',
		'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "Home",
				showMenu : true
			};
			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}
			$scope.page = {
				searchRights : false,
				addRights : false,
				uploadRights : false,
				currentMenu : "home",
				columns : [],
				data : []
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

		} ]);
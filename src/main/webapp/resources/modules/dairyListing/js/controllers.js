var dairyList = angular.module('DairyListing');
dairyList.controller('DairyListCtrl', [ '$scope', '$location',
		'$cookieStore', 'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "List Of Dairies",
				showMenu : true
			};
			
			var actions = [ {
				name : "View",
				action : "#/dairyDetailHome"
			}];

			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}
			
			$scope.page = {
				searchRights : true,
				addRights : false,
				uploadRights : false,
				name : "Dairy List",
				currentMenu : "dairyListing",
				columns : [ {
					id : "name",
					name : "Dairy Name",
					type : "text",
					searchMode : true
				}, {
					id : "action",
					name : "Action",
					type : "link",
					searchMode : false
				}],
				data : [ {
					name : "Sonai Dairy",
					action : actions
				},
				{
					name : "Gokul Dairy",
					action : actions
				},
				{
					name : "Mother Dairy",
					action : actions
				},
				{
					name : "Warna Dairy",
					action : actions
				},
				{
					name : "Real Dairy",
					action : actions
				}]

			};
			
			var owner = $cookieStore.get('activeUser');
			if (true) {
				owner = {
					userName : 'gvrnmnt',
					password : 'gvrnmnt'
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

dairyList.controller('DairyDetailHomeCtrl', [ '$scope', '$location',
	'$cookieStore', 'AuthenticationService',
	function($scope, $location, $cookieStore, AuthenticationService) {
		$scope.app = {
			title : "Dairy Detail",
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
			currentMenu : "dairyDetailHome",
			columns : [],
			data : []
		};
		
		var owner = $cookieStore.get('activeUser');
		if (true) {
			owner = {
				userName : 'gvrnmnt',
				password : 'gvrnmnt'
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

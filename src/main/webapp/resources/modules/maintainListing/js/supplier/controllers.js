var maintainList = angular.module('MaintainListing');
maintainList.controller('SupplierListCtrl', [ '$scope', '$location',
		'$cookieStore', 'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "Manage User",
				showMenu : true
			};
			var actions = [ {
				name : "View",
				action : "#/View"
			}, {
				name : "Edit",
				action : "#/Edit"
			}, {
				name : "Remove",
				action : "#/Remove"
			} ];

			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}
			$scope.page = {
				searchRights : true,
				addRights : true,
				uploadRights : false,
				name : "Customers List",
				currentMenu : "maintainListing",
				columns : [ {
					id : "name",
					name : "Name /  Organization Name",
					type : "text",
					searchMode : true
				}, {
					id : "mobNo",
					name : "Mobile No.",
					type : "text",
					searchMode : true
				}, {
					id : "ofcMobNo",
					name : "Office Contact No.",
					type : "text",
					searchMode : true
				}, {
					id : "aadharNo",
					name : "Aadhar No.",
					type : "text",
					searchMode : true
				}, {
					id : "email",
					name : "Email",
					type : "text",
					searchMode : true
				},{
					id : "role",
					name : "Assigned Role",
					type : "text",
					searchMode : true
				}
				
				, {
					id : "action",
					name : "Action",
					type : "link",
					searchMode : false
				} ],
				data : [ {
					name : "Mayur",
					mobNo : "8918989899",
					ofcMobNo : "997986875785",
					aadharNo : "AADK2114SFFF",
					email : "mayur@gmail.com",
					role : "Farmer",
					action : actions
				},{
					name : "Akshay",
					mobNo : "8353422345",
					ofcMobNo : "878748402477",
					aadharNo : "KKAJSKN4388",
					email : "akshay@gmail.com",
					role : "Chilling Plant",
					action : actions
				},{
					name : "Gopal",
					mobNo : "87912457575",
					ofcMobNo : "77482347858",
					aadharNo : "SDHKFJS125674",
					email : "gopal@gmail.com",
					role : "Main Dairy",
					action : actions
				} ]

			};
			$scope.add = function(){
				$location.path("/addSupplier");
			}
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


maintainList.controller('SupplierCtrl', [ '$scope', '$location',
	'$cookieStore', 'AuthenticationService',
	function($scope, $location, $cookieStore, AuthenticationService) {
	
	$scope.app = {
			title : "Manage User > Add Supplier",
			showMenu : true
		};
	
	$scope.page = {
			currentMenu : "maintainListing"
	}
	
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
	
	$scope.add = function(){
		$location.path('/suppliers');
	}
	
	$scope.back = function(){
		$location.path('/suppliers');
	}
	
}]);

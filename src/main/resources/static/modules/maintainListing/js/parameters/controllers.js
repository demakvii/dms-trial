var maintainList = angular.module('MaintainListing');

maintainList.controller('ParameterListCtrl', [ '$scope', '$location',
		'$cookieStore', 'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "Parameters",
				showMenu : true
			};
			var actions = [ {
				name : "View",
				action : "#/View"
			}, {
				name : "Edit",
				action : "#/Edit"
			} ];

			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}
			$scope.page = {
				searchRights : true,
				addRights : false,
				uploadRights : false,
				name : "Parameters List",
				currentMenu : "maintainListing",
				columns : [ {
					id : "paramName",
					name : "Name of parameter",
					type : "text",
					searchMode : true
				},
				{
					id : "paramCode",
					name : "Code of parameter",
					type : "text",
					searchMode : true
				},
				{
					id : "paramValue",
					name : "Value of parameter",
					type : "text",
					searchMode : true
				}, {
					id : "action",
					name : "Action",
					type : "link",
					searchMode : false
				} ],
				data : [ {
					paramName : "Current Price Milk",
					paramCode : "COSTOFMILK",
					paramValue : "31",
					action : actions
				},{
					paramName : "Billing Cycle",
					paramCode : "BILLINGCYCLE",
					paramValue : "30",
					action : actions
				} ]

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
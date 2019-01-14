var dairyList = angular.module('DairyListing');
dairyList.controller('DairyListCtrl', [ '$scope', '$location', '$cookieStore',
		'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "List Of Dairies",
				showMenu : true
			};

			var actions = [ {
				name : "View",
				action : "dms#/dairyDetailHome"
			} ];

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
				} ],
				data : [ {
					name : "Sonai Dairy",
					action : actions
				}, {
					name : "Gokul Dairy",
					action : actions
				}, {
					name : "Mother Dairy",
					action : actions
				}, {
					name : "Warna Dairy",
					action : actions
				}, {
					name : "Real Dairy",
					action : actions
				} ]

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

dairyList.controller('MainDairyDetailCtrl', [ '$scope', '$location',
		'$cookieStore', 'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "Main Dairy",
				showMenu : true
			};
			var actions = [ {
				name : "View",
				action : "#/View"
			} ];

			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}

			$scope.page = {
				searchRights : true,
				addRights : false,
				uploadRights : false,
				name : "Main Dairy Detail List",
				currentMenu : "dairyDetailHome",
				columns : [ {
					id : "module",
					name : "Module Name",
					type : "text",
					searchMode : true
				}, {
					id : "name",
					name : "Name",
					type : "text",
					searchMode : true
				}, {
					id : "createdBy",
					name : "Created by",
					type : "text",
					searchMode : true
				}, {
					id : "creationDate",
					name : "Creation Date",
					type : "text",
					searchMode : true
				}, {
					id : "action",
					name : "Action",
					type : "link",
					searchMode : false
				} ],
				data : []

			};

			$scope.submit = function() {
				$scope.page = {
					searchRights : true,
					addRights : false,
					uploadRights : false,
					name : "Main Dairy Detail List",
					currentMenu : "dairyDetailHome",
					columns : [ {
						id : "module",
						name : "Module Name",
						type : "text",
						searchMode : true
					}, {
						id : "name",
						name : "Name",
						type : "text",
						searchMode : true
					}, {
						id : "createdBy",
						name : "Created by",
						type : "text",
						searchMode : true
					}, {
						id : "creationDate",
						name : "Creation Date",
						type : "text",
						searchMode : true
					}, {
						id : "action",
						name : "Action",
						type : "link",
						searchMode : false
					} ],
					data : [ {
						module : "Customer Creation",
						name : "Mayur",
						createdBy : "gopalLC",
						creationDate : "28/12/2018",
						action : actions
					}, {
						module : "Customer Creation",
						name : "Akshay",
						createdBy : "JohnMD",
						creationDate : "18/12/2018",
						action : actions
					}, {
						module : "Upload Supply",
						name : "Upload of 18/12/2018",
						createdBy : "mayurCP",
						creationDate : "18/12/2018",
						action : actions
					}, ]

				};
			}

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

dairyList.controller('LocalCollectorDetailCtrl', [ '$scope', '$location',
		'$cookieStore', 'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "Local Collector Details List",
				showMenu : true
			};
			var actions = [ {
				name : "Download",
				action : "#/download"
			} ];

			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}

			$scope.page = {
				searchRights : true,
				addRights : false,
				uploadRights : true,
				name : "Local Collector Details List",
				currentMenu : "dairyDetailHome",
				isDownloadEnabled : false,
				columns : [ {
					id : "date",
					name : "Date",
					type : "text",
					searchMode : true
				}, {
					id : "time",
					name : "Time",
					type : "text",
					searchMode : true
				}, {
					id : "uniqueId",
					name : "Unique ID",
					type : "text",
					searchMode : true
				}, {
					id : "typeOfLogin",
					name : "Type of Login",
					type : "text",
					searchMode : true
				}, {
					id : "firstName",
					name : "First Name",
					type : "text",
					searchMode : true
				}, {
					id : "lastName",
					name : "Last Name",
					type : "text",
					searchMode : true
				}, {
					id : "contactNo",
					name : "Contact No",
					type : "text",
					searchMode : true
				}, {
					id : "address",
					name : "Address",
					type : "text",
					searchMode : true
				}, {
					id : "shift",
					name : "Shift",
					type : "text",
					searchMode : true
				}, {
					id : "quantityOfMilk",
					name : "Quantity of Milk",
					type : "text",
					searchMode : true
				}, {
					id : "amtToBePaid",
					name : "Amount to be Paid (Rs)",
					type : "text",
					searchMode : true
				}, {
					id : "currentRatePLitre",
					name : "Current Rate/Litre (Rs)",
					type : "text",
					searchMode : true
				}, {
					id : "deductions",
					name : "Deductions (Rs)",
					type : "text",
					searchMode : true
				}, {
					id : "action",
					name : "Action",
					type : "link",
					searchMode : false
				} ],
				data : []

			};

			$scope.submit = function() {
				$scope.page = {
					searchRights : true,
					addRights : false,
					uploadRights : true,
					name : "Local Collector Details List",
					currentMenu : "dairyDetailHome",
					isDownloadEnabled : true,
					columns : [ {
						id : "date",
						name : "Date",
						type : "text",
						searchMode : true
					}, {
						id : "time",
						name : "Time",
						type : "text",
						searchMode : true
					}, {
						id : "uniqueId",
						name : "Unique ID",
						type : "text",
						searchMode : true
					}, {
						id : "typeOfLogin",
						name : "Type of Login",
						type : "text",
						searchMode : true
					}, {
						id : "firstName",
						name : "First Name",
						type : "text",
						searchMode : true
					}, {
						id : "lastName",
						name : "Last Name",
						type : "text",
						searchMode : true
					}, {
						id : "contactNo",
						name : "Contact No",
						type : "text",
						searchMode : true
					}, {
						id : "address",
						name : "Address",
						type : "text",
						searchMode : true
					}, {
						id : "shift",
						name : "Shift",
						type : "text",
						searchMode : true
					}, {
						id : "quantityOfMilk",
						name : "Quantity of Milk",
						type : "text",
						searchMode : true
					}, {
						id : "amtToBePaid",
						name : "Amount to be Paid (Rs)",
						type : "text",
						searchMode : true
					}, {
						id : "currentRatePLitre",
						name : "Current Rate/Litre (Rs)",
						type : "text",
						searchMode : true
					}, {
						id : "deductions",
						name : "Deductions (Rs)",
						type : "text",
						searchMode : true
					}, {
						id : "action",
						name : "Action",
						type : "link",
						searchMode : false
					} ],
					data : [ {
						date : "16/12/2018",
						time : "11:30AM",
						uniqueId : "8918989899",
						typeOfLogin : "FC",
						firstName : "Mayur",
						lastName : "kalekar",
						contactNo : "99878932389",
						address : "Lodhivali",
						shift : "M",
						quantityOfMilk : "10",
						amtToBePaid : "170",
						currentRatePLitre : "18",
						deductions : "10",
						action : actions
					}, {
						date : "18/12/2018",
						time : "07:30PM",
						uniqueId : "8918989899",
						typeOfLogin : "FC",
						firstName : "Mayur",
						lastName : "kalekar",
						contactNo : "99878932389",
						address : "Lodhivali",
						shift : "E",
						quantityOfMilk : "50",
						amtToBePaid : "570",
						currentRatePLitre : "18",
						deductions : "0",
						action : actions
					} ]

				};
			}

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

dairyList.controller('MilkmanDetailCtrl', [ '$scope', '$location',
		'$cookieStore', 'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "Milkman/Farmer Details List",
				showMenu : true
			};
			var actions = [ {
				name : "View",
				action : "#/View"
			} ];

			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}

			$scope.page = {
				searchRights : true,
				addRights : false,
				uploadRights : true,
				name : "Milkman/Farmer Details List",
				currentMenu : "dairyDetailHome",
				columns : [ {
					id : "date",
					name : "Date",
					type : "text",
					searchMode : true
				}, {
					id : "time",
					name : "Time",
					type : "text",
					searchMode : true
				}, {
					id : "uniqueId",
					name : "Unique ID",
					type : "text",
					searchMode : true
				}, {
					id : "typeOfLogin",
					name : "Type of Login",
					type : "text",
					searchMode : true
				}, {
					id : "firstName",
					name : "First Name",
					type : "text",
					searchMode : true
				}, {
					id : "lastName",
					name : "Last Name",
					type : "text",
					searchMode : true
				}, {
					id : "contactNo",
					name : "Contact No",
					type : "text",
					searchMode : true
				}, {
					id : "address",
					name : "Address",
					type : "text",
					searchMode : true
				}, {
					id : "shift",
					name : "Shift",
					type : "text",
					searchMode : true
				}, {
					id : "quantityOfMilk",
					name : "Quantity of Milk",
					type : "text",
					searchMode : true
				}, {
					id : "action",
					name : "Action",
					type : "link",
					searchMode : false
				} ],
				data : []

			};

			$scope.submit = function() {
				$scope.page = {
					searchRights : true,
					addRights : false,
					uploadRights : true,
					name : "Milkman/Farmer Details List",
					currentMenu : "dairyDetailHome",
					columns : [ {
						id : "date",
						name : "Date",
						type : "text",
						searchMode : true
					}, {
						id : "time",
						name : "Time",
						type : "text",
						searchMode : true
					}, {
						id : "uniqueId",
						name : "Unique ID",
						type : "text",
						searchMode : true
					}, {
						id : "typeOfLogin",
						name : "Type of Login",
						type : "text",
						searchMode : true
					}, {
						id : "firstName",
						name : "First Name",
						type : "text",
						searchMode : true
					}, {
						id : "lastName",
						name : "Last Name",
						type : "text",
						searchMode : true
					}, {
						id : "contactNo",
						name : "Contact No",
						type : "text",
						searchMode : true
					}, {
						id : "address",
						name : "Address",
						type : "text",
						searchMode : true
					}, {
						id : "shift",
						name : "Shift",
						type : "text",
						searchMode : true
					}, {
						id : "quantityOfMilk",
						name : "Quantity of Milk",
						type : "text",
						searchMode : true
					}, {
						id : "action",
						name : "Action",
						type : "link",
						searchMode : false
					} ],
					data : [ {
						date : "16/12/2018",
						time : "08:30AM",
						uniqueId : "8918989899",
						typeOfLogin : "FC",
						firstName : "Mayur",
						lastName : "kalekar",
						contactNo : "99878932389",
						address : "Lodhivali",
						shift : "M",
						quantityOfMilk : "10",
						action : actions
					}, {
						date : "16/12/2018",
						time : "10:30PM",
						uniqueId : "8989899",
						typeOfLogin : "LC",
						firstName : "Akshay",
						lastName : "Dhonde",
						contactNo : "2325466",
						address : "Kharghar",
						shift : "E",
						quantityOfMilk : "50",
						action : actions
					} ]

				};
			}

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

			$scope.upload = function() {
				$location.path('/uploadSupply');
			}

		} ]);

dairyList.controller('ChillingPlantDetailCtrl', [ '$scope', '$location',
		'$cookieStore', 'AuthenticationService',
		function($scope, $location, $cookieStore, AuthenticationService) {
			$scope.app = {
				title : "Chilling Plant Details List",
				showMenu : true
			};
			var actions = [ {
				name : "View",
				action : "#/View"
			} ];

			$scope.sort = function(sortKey) {
				$scope.sortKey = sortKey;
				$scope.reverse = !$scope.reverse;
			}

			$scope.page = {
				searchRights : true,
				addRights : false,
				uploadRights : false,
				name : "Chilling Plant Details List",
				currentMenu : "dairyListing",
				columns : [ {
					id : "paramName",
					name : "Name of parameter",
					type : "text",
					searchMode : true
				}, {
					id : "paramCode",
					name : "Code of parameter",
					type : "text",
					searchMode : true
				}, {
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
				data : []

			};

			$scope.submit = function() {
				$scope.page = {
					searchRights : true,
					addRights : false,
					uploadRights : false,
					name : "Chilling Plant Details List",
					currentMenu : "dairyListing",
					columns : [ {
						id : "paramName",
						name : "Name of parameter",
						type : "text",
						searchMode : true
					}, {
						id : "paramCode",
						name : "Code of parameter",
						type : "text",
						searchMode : true
					}, {
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
					}, {
						paramName : "Billing Cycle",
						paramCode : "BILLINGCYCLE",
						paramValue : "30",
						action : actions
					} ]

				};
			}

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

var taskList = angular.module('TaskList');
taskList.controller('PendingMyTasksCtrl', ['$scope', '$location', '$cookieStore', 'AuthenticationService', function($scope, $location, $cookieStore, AuthenticationService) {
	$scope.app = {title:"Pending My Tasks",showMenu:true};
	var actions = [{name:"View",action:"#/View"}
					];
	
	$scope.sort = function(sortKey) {
		$scope.sortKey = sortKey;
		$scope.reverse = !$scope.reverse;
	}
	$scope.page = {
		searchRights : true,
		addRights : false,
		uploadRights : false,
		name:"Pending My Tasks List",
		currentMenu : "home",
		columns:[		
		{id:"module",name:"Module Name",type:"text",searchMode:true},
		{id:"name",name:"Name",type:"text",searchMode:true},
		{id:"createdBy",name:"Created by",type:"text",searchMode:true},
		{id:"creationDate",name:"Creation Date",type:"text",searchMode:true},
		{id:"action",name:"Action",type:"link",searchMode:false}
	],
	data:[
		{module:"Customer Creation",name:"Mayur",createdBy:"gopalLC",creationDate:"28/12/2018",action:actions},
		{module:"Customer Creation",name:"Akshay",createdBy:"JohnMD",creationDate:"18/12/2018",action:actions},
		{module:"Upload Supply",name:"Upload of 18/12/2018",createdBy:"mayurCP",creationDate:"18/12/2018",action:actions},
	]
	
	};
	
	
    var owner = $cookieStore.get('activeUser');
    if(true){
    	owner = {userName:'Mayur',password:'mayur'};
    }
    if (owner != null) {
        $scope.activeUser = {
            userName: owner.userName,
            password: owner.password
        };

    } else $location.path('/login');
 
}]);

taskList.controller('PendingTasksCtrl', ['$scope', '$location', '$cookieStore', 'AuthenticationService', function($scope, $location, $cookieStore, AuthenticationService) {
	$scope.app = {title:"Pending Tasks",showMenu:true};
	var actions = [{name:"View",action:"#/View"},
					{name:"Approve",action:"#/Approve"},
					{name:"Reject",action:"#/Reject"}
					];
	
	$scope.sort = function(sortKey) {
		$scope.sortKey = sortKey;
		$scope.reverse = !$scope.reverse;
	}
	$scope.page = {
		searchRights : true,
		addRights : false,
		uploadRights : false,
		name:"Pending Tasks List",
		currentMenu : "home",
		columns:[		
			{id:"module",name:"Module Name",type:"text",searchMode:true},
			{id:"name",name:"Name",type:"text",searchMode:true},
			{id:"createdBy",name:"Created by",type:"text",searchMode:true},
			{id:"creationDate",name:"Creation Date",type:"text",searchMode:true},
			{id:"action",name:"Action",type:"link",searchMode:false}
		],
		data:[
			{module:"Customer Creation",name:"Mayur",createdBy:"gopalLC",creationDate:"28/12/2018",action:actions},
			{module:"Customer Creation",name:"Akshay",createdBy:"JohnMD",creationDate:"18/12/2018",action:actions},
			{module:"Upload Supply",name:"Upload of 18/12/2018",createdBy:"mayurCP",creationDate:"18/12/2018",action:actions},
		]
	
	};
	
	
    var owner = $cookieStore.get('activeUser');
    if(true){
    	owner = {userName:'Mayur',password:'mayur'};
    }
    if (owner != null) {
        $scope.activeUser = {
            userName: owner.userName,
            password: owner.password
        };

    } else $location.path('/login');
 
}]);

taskList.controller('ApprovedTasksCtrl', ['$scope', '$location', '$cookieStore', 'AuthenticationService', function($scope, $location, $cookieStore, AuthenticationService) {
	$scope.app = {title:"Approved Tasks",showMenu:true};
	var actions = [{name:"View",action:"#/View"}];
	
	$scope.sort = function(sortKey) {
		$scope.sortKey = sortKey;
		$scope.reverse = !$scope.reverse;
	}
	$scope.page = {
		searchRights : true,
		addRights : false,
		uploadRights : false,
		name:"Aprroved Tasks List",
		currentMenu : "home",
		columns:[		
			{id:"module",name:"Module Name",type:"text",searchMode:true},
			{id:"name",name:"Name",type:"text",searchMode:true},
			{id:"createdBy",name:"Created by",type:"text",searchMode:true},
			{id:"creationDate",name:"Creation Date",type:"text",searchMode:true},
			{id:"approvedBy",name:"Approved By",type:"text",searchMode:true},
			{id:"approvedDate",name:"Approved Date",type:"text",searchMode:true},
			{id:"action",name:"Action",type:"link",searchMode:false}
		],
		data:[
			{module:"Customer Creation",name:"Mayur",createdBy:"gopalLC",creationDate:"28/12/2018"
				,approvedDate:"29/12/2018",approvedBy:"abcCP",action:actions},
			{module:"Customer Creation",name:"Akshay",createdBy:"JohnMD",creationDate:"18/12/2018"
				,approvedBy:"JohnMD",approvedDate:"21/12/2018",action:actions},
			{module:"Upload Supply",name:"Upload of 18/12/2018",createdBy:"mayurCP",creationDate:"18/12/2018"
				,approvedBy:"gopalMD",approvedDate:"24/12/2018",action:actions},
		]
	
	};
	
	
    var owner = $cookieStore.get('activeUser');
    if(true){
    	owner = {userName:'Mayur',password:'mayur'};
    }
    if (owner != null) {
        $scope.activeUser = {
            userName: owner.userName,
            password: owner.password
        };

    } else $location.path('/login');
 
}]);

taskList.controller('RejectedTasksCtrl', ['$scope', '$location', '$cookieStore', 'AuthenticationService', function($scope, $location, $cookieStore, AuthenticationService) {
	$scope.app = {title:"Rejected Tasks",showMenu:true};
	var actions = [{name:"View",action:"#/View"}
					];
	
	$scope.sort = function(sortKey) {
		$scope.sortKey = sortKey;
		$scope.reverse = !$scope.reverse;
	}
	$scope.page = {
		searchRights : true,
		addRights : false,
		uploadRights : false,
		name:"Rejected Tasks List",
		currentMenu : "home",
		columns:[		
			{id:"module",name:"Module Name",type:"text",searchMode:true},
			{id:"name",name:"Name",type:"text",searchMode:true},
			{id:"createdBy",name:"Created by",type:"text",searchMode:true},
			{id:"creationDate",name:"Creation Date",type:"text",searchMode:true},
			{id:"rejectedBy",name:"Rejected by",type:"text",searchMode:true},
			{id:"rejectedDate",name:"Rejected Date",type:"text",searchMode:true},
			{id:"action",name:"Action",type:"link",searchMode:false}
		],
		data:[
			{module:"Customer Creation",name:"Mayur",createdBy:"gopalLC",creationDate:"28/12/2018",
				rejectedBy:"gopalMD",rejectedDate:"31/12/2018",action:actions},
			{module:"Customer Creation",name:"Akshay",createdBy:"JohnMD",creationDate:"18/12/2018",
					rejectedBy:"JohnMD",rejectedDate:"21/12/2018",action:actions},
			{module:"Upload Supply",name:"Upload of 18/12/2018",createdBy:"mayurCP",creationDate:"18/12/2018"
				,rejectedBy:"akshayMD",rejectedDate:"24/12/2018",action:actions},
		]
	
	};
	
	
    var owner = $cookieStore.get('activeUser');
    if(true){
    	owner = {userName:'Mayur',password:'mayur'};
    }
    if (owner != null) {
        $scope.activeUser = {
            userName: owner.userName,
            password: owner.password
        };

    } else $location.path('/login');
 
}]);
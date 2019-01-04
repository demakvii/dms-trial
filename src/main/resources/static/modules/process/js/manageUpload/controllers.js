var process = angular.module('Process');
process.controller('ManageUploadListCtrl', ['$scope', '$location', '$cookieStore', 'AuthenticationService', function($scope, $location, $cookieStore, AuthenticationService) {
	$scope.app = {title:"Manage Upload",showMenu:true};
	var actions = [{name:"View",action:"#/View"},
					{name:"Edit",action:"#/Edit"},
					{name:"Remove",action:"#/Remove"}
					];
	
	$scope.sort = function(sortKey) {
		$scope.sortKey = sortKey;
		$scope.reverse = !$scope.reverse;
	}
	$scope.page = {
		searchRights : true,
		addRights : false,
		uploadRights : true,
		name:"Upload List",	
		currentMenu :"process",
		columns:[		
		{id:"date",name:"Date",type:"text",searchMode:true},
		{id:"uniqueId",name:"Unique ID",type:"text",searchMode:true},
		{id:"typeOfLogin",name:"Type of Login",type:"text",searchMode:true},
		{id:"firstName",name:"First Name",type:"text",searchMode:true},
		{id:"lastName",name:"Last Name",type:"text",searchMode:true},
		{id:"contactNo",name:"Contact No",type:"text",searchMode:true},
		{id:"address",name:"Address",type:"text",searchMode:true},
		{id:"shift",name:"Shift",type:"text",searchMode:true},
		{id:"quantityOfMilk",name:"Quantity of Milk",type:"text",searchMode:true},
		{id:"action",name:"Action",type:"link",searchMode:false}
	],
	data:[
		{date:"16/12/2018",uniqueId:"8918989899",typeOfLogin:"FC",firstName:"Mayur",lastName:"kalekar"
			,contactNo:"99878932389",address:"Lodhivali",shift:"M",quantityOfMilk:"10",action:actions},
		{date:"16/12/2018",uniqueId:"8989899",typeOfLogin:"LC",firstName:"Akshay",lastName:"Dhonde"
				,contactNo:"2325466",address:"Kharghar",shift:"E",quantityOfMilk:"50",action:actions}
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
    
    $scope.upload = function(){
    	$location.path('/uploadSupply');
    }
 
}]);

process.controller('UploadSupplyCtrl', ['$scope', '$location', '$cookieStore', 'AuthenticationService', function($scope, $location, $cookieStore, AuthenticationService) {
	$scope.app = {title:"Upload Supply",showMenu:true};
	var actions = [{name:"View",action:"#/View"},
					{name:"Edit",action:"#/Edit"},
					{name:"Remove",action:"#/Remove"}
					];
	
	$scope.page = {
		searchRights : false,
		addRights : false,
		uploadRights : false,
		currentMenu :"process",
		columns:[],
	data:[]
	
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
    
    $scope.upload= function(){
    	 $location.path('/manageUpload');
    }
    
    $scope.back= function(){
   	 $location.path('/manageUpload');
   }
    
}]);
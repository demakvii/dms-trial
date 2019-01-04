var process = angular.module('Process');

process.controller('ViewPricingListCtrl', ['$scope', '$location', '$cookieStore', 'AuthenticationService', function($scope, $location, $cookieStore, AuthenticationService) {
	$scope.app = {title:"View Pricing",showMenu:true};
	var actions = [
					{name:"Download",action:"#/download"}
					];
	
	$scope.sort = function(sortKey) {
		$scope.sortKey = sortKey;
		$scope.reverse = !$scope.reverse;
	}
	$scope.page = {
			searchRights : true,
			addRights : false,
			uploadRights : true,
			name:"View Pricing List",	
			currentMenu :"process",
			isDownloadEnabled : false,
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
			{id:"amtToBePaid",name:"Amount to be Paid (Rs)",type:"text",searchMode:true},
			{id:"currentRatePLitre",name:"Current Rate/Litre (Rs)",type:"text",searchMode:true},
			{id:"deductions",name:"Deductions (Rs)",type:"text",searchMode:true},
			{id:"action",name:"Action",type:"link",searchMode:false}
		],
		data:[]
		
		};
	
	$scope.submit = function(){
		$scope.page = {
				searchRights : true,
				addRights : false,
				uploadRights : true,
				name:"View Pricing List",	
				currentMenu :"process",
				isDownloadEnabled : true,
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
				{id:"amtToBePaid",name:"Amount to be Paid (Rs)",type:"text",searchMode:true},
				{id:"currentRatePLitre",name:"Current Rate/Litre (Rs)",type:"text",searchMode:true},
				{id:"deductions",name:"Deductions (Rs)",type:"text",searchMode:true},
				{id:"action",name:"Action",type:"link",searchMode:false}
			],
			data:[
				{date:"16/12/2018",uniqueId:"8918989899",typeOfLogin:"FC",firstName:"Mayur",lastName:"kalekar"
					,contactNo:"99878932389",address:"Lodhivali",shift:"M",quantityOfMilk:"10"
					,amtToBePaid:"170",currentRatePLitre:"18",deductions:"10",action:actions},
				{date:"18/12/2018",uniqueId:"8918989899",typeOfLogin:"FC",firstName:"Mayur",lastName:"kalekar"
						,contactNo:"99878932389",address:"Lodhivali",shift:"E",quantityOfMilk:"50"
						,amtToBePaid:"570",currentRatePLitre:"18",deductions:"0",action:actions}
			]
			
			};
	}
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
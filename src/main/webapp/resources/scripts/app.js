angular.module('Database', []);
angular.module('Authentication', ['Database']);
angular.module('Home', ['Database']);
angular.module('MaintainListing',['Database']);
angular.module('Process',['Database']);
angular.module('TaskList',['Database']);
angular.module('Profile',['Database']);
angular.module('DairyListing',['Database']);
var dmsApp = angular.module('DMSApp', ['Authentication', 'ngRoute', 'Home','MaintainListing','Process','TaskList','Profile', 'DairyListing','ngCookies']);

dmsApp.constant('baseHref','dms#');
dmsApp.run(function($rootScope,baseHref){
	$rootScope.baseHref = baseHref;
	
});
dmsApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

    $routeProvider
	    .when('/login', {
	        templateUrl: 'resources/modules/authentication/views/login.html',
	        controller: 'LoginCtrl'
	    })
	    .when('/forgetPassword',{
	    	controller: 'ForgetPasswordCtrl',
	    	templateUrl: 'resources/modules/authentication/views/forgetPassword.html'
	    })
	    .when('/home', {
	        templateUrl: 'resources/modules/home/views/home.html',
	        controller: 'MainCtrl'
	    })
	    .when('/changePassword',{
	        templateUrl:'resources/modules/home/views/changePassword.html',
	        controller : 'PassCtrl'
	    })
	    .when("/suppliers",{
	    	templateUrl : 'resources/modules/maintainListing/views/supplier/supplierList.html',
	    	controller : 'SupplierListCtrl'
	    })
	    .when("/addSupplier",{
	    	templateUrl : 'resources/modules/maintainListing/views/supplier/supplier.html',
	    	controller : 'SupplierCtrl'
	    })
	    .when("/parameters",{
	    	templateUrl : 'resources/modules/maintainListing/views/parameters/parameterList.html',
	    	controller : 'ParameterListCtrl'
	    })
	    .when("/manageUpload",{
	    	templateUrl : 'resources/modules/process/views/manageUpload/manageUploadList.html',
	    	controller : 'ManageUploadListCtrl'
	    })
	    .when("/uploadSupply",{
	    	templateUrl : 'resources/modules/process/views/manageUpload/manageUpload.html',
	    	controller : 'UploadSupplyCtrl'
	    })
	    .when("/viewPricing",{
	    	templateUrl : 'resources/modules/process/views/viewPricing/viewPricingList.html',
	    	controller : 'ViewPricingListCtrl'
	    })
	    .when("/pendingMyTasks",{
	    	templateUrl : 'resources/modules/taskList/views/taskList.html',
	    	controller : 'PendingMyTasksCtrl'
	    })
	    .when("/pendingTasks",{
	    	templateUrl : 'resources/modules/taskList/views/taskList.html',
	    	controller : 'PendingTasksCtrl'
	    })
	    .when("/approvedTasks",{
	    	templateUrl : 'resources/modules/taskList/views/taskList.html',
	    	controller : 'ApprovedTasksCtrl'
	    })
	    .when("/rejectedTasks",{
	    	templateUrl : 'resources/modules/taskList/views/taskList.html',
	    	controller : 'RejectedTasksCtrl'
	    })
	    .when("/settings",{
	    	templateUrl : 'resources/modules/profile/views/settings/settings.html',
	    	controller : 'SettingCtrl'
	    })
	    .when("/changePassword",{
	    	templateUrl : 'resources/modules/profile/views/changePassword/changePassword.html',
	    	controller : 'ChangePasswordCtrl'
	    })
	    .when('/logout', {
	        controller: 'LoginCtrl',
	        templateUrl: 'resources/modules/authentication/views/login.html'
	    })
        .when('/dairyListing', {
        	controller : 'DairyListCtrl',
        	templateUrl : 'resources/modules/dairyListing/views/dairyList.html'
        })
        .when('/dairyDetailHome', {
        	controller : 'DairyDetailHomeCtrl',
        	templateUrl : 'resources/modules/dairyListing/views/dairyDetailHome.html'
        })
        .when('/mainDairyDetail', {
        	controller : 'MainDairyDetailCtrl',
        	templateUrl : 'resources/modules/dairyListing/views/govListingDairyTaskList.html'
        })
        .when('/chillingPlantDetail', {
        	controller : 'ChillingPlantDetailCtrl',
        	templateUrl : 'resources/modules/dairyListing/views/govListingDairyTaskList.html'
        })
        .when('/localCollectorDetail', {
        	controller : 'LocalCollectorDetailCtrl',
        	templateUrl : 'resources/modules/dairyListing/views/govListingDairyTaskList.html'
        })
        .when('/milkmanDetail', {
        	controller : 'MilkmanDetailCtrl',
        	templateUrl : 'resources/modules/dairyListing/views/govListingDairyTaskList.html'
        })
        
       .otherwise({ redirectTo: '/login' });
    
   	/*$locationProvider.html5Mode(true);*/
}]);



angular.module('Database', []);
angular.module('Authentication', ['Database']);
angular.module('Home', ['Database']);
angular.module('MaintainListing',['Database']);
angular.module('Process',['Database']);
angular.module('TaskList',['Database']);
angular.module('Profile',['Database']);
var dmsApp = angular.module('DMSApp', ['Authentication', 'ngRoute', 'Home','MaintainListing','Process','TaskList','Profile', 'ngCookies']);


dmsApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'modules/authentication/views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/forgetPassword',{
        	controller: 'ForgetPasswordCtrl',
        	templateUrl: 'modules/authentication/views/forgetPassword.html'
        })
        .when('/home', {
            templateUrl: 'modules/home/views/home.html',
            controller: 'MainCtrl'
        })
        .when('/changePassword',{
            templateUrl:'modules/home/views/changePassword.html',
            controller : 'PassCtrl'
        })
        .when("/suppliers",{
        	templateUrl : 'modules/maintainListing/views/supplier/supplierList.html',
        	controller : 'SupplierListCtrl'
        })
        .when("/addSupplier",{
        	templateUrl : 'modules/maintainListing/views/supplier/supplier.html',
        	controller : 'SupplierCtrl'
        })
        .when("/parameters",{
        	templateUrl : 'modules/maintainListing/views/parameters/parameterList.html',
        	controller : 'ParameterListCtrl'
        })
        .when("/manageUpload",{
        	templateUrl : 'modules/process/views/manageUpload/manageUploadList.html',
        	controller : 'ManageUploadListCtrl'
        })
        .when("/uploadSupply",{
        	templateUrl : 'modules/process/views/manageUpload/manageUpload.html',
        	controller : 'UploadSupplyCtrl'
        })
        .when("/viewPricing",{
        	templateUrl : 'modules/process/views/viewPricing/viewPricingList.html',
        	controller : 'ViewPricingListCtrl'
        })
        .when("/pendingMyTasks",{
        	templateUrl : 'modules/taskList/views/taskList.html',
        	controller : 'PendingMyTasksCtrl'
        })
        .when("/pendingTasks",{
        	templateUrl : 'modules/taskList/views/taskList.html',
        	controller : 'PendingTasksCtrl'
        })
        .when("/approvedTasks",{
        	templateUrl : 'modules/taskList/views/taskList.html',
        	controller : 'ApprovedTasksCtrl'
        })
        .when("/rejectedTasks",{
        	templateUrl : 'modules/taskList/views/taskList.html',
        	controller : 'RejectedTasksCtrl'
        })
        .when("/settings",{
        	templateUrl : 'modules/profile/views/settings/settings.html',
        	controller : 'SettingCtrl'
        })
        .when("/changePassword",{
        	templateUrl : 'modules/profile/views/changePassword/changePassword.html',
        	controller : 'ChangePasswordCtrl'
        })
        .when('/logout', {
            controller: 'LoginCtrl',
            templateUrl: 'modules/authentication/views/login.html'
        })
        
        .otherwise({ redirectTo: '/login' });
    
//    	$locationProvider.html5Mode(true);
}]);



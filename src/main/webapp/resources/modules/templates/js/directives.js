var dmsApp = angular.module('DMSApp');

dmsApp.directive('footerBar',function(){

	return {
		restrict : 'E',
		replace: 'false',
		templateUrl : 'resources/modules/templates/footer/footer.html'
	}
});


dmsApp.directive('headerBar',function(){

	return {
		restrict : 'E',
		replace: 'false',
		templateUrl : 'resources/modules/templates/header/header.html'
	}
});


dmsApp.directive('menuBar',function(){

	return {
		restrict : 'E',
		replace: 'false',
		templateUrl : 'resources/modules/templates/menu/menu.html'
	}
});


dmsApp.directive('welcomeInfo',function(){

	return {
		restrict : 'E',
		replace: 'false',
		templateUrl : 'resources/modules/templates/info/welcome-info.html'
	}
});

dmsApp.directive('customTable',function(){

	return {
		restrict : 'E',
		replace: 'false',
		templateUrl : 'resources/modules/templates/table/custom-table.html'
	}
});

dmsApp.directive( 'jetMenuElemReady', function( $parse ) {
	   return {
	       restrict: 'A',
	       link: function( $scope, elem, attrs ) {    
	          elem.ready(function(){
	        	  var currMenuId = attrs.jetMenuElemReady;
	        	 if(currMenuId){
	        		 $("#"+ currMenuId).addClass("active");
	        	 }
	        	 var headerToggle = function(headerBar,navBar,window){ 
	        	  var header = $(headerBar);
	        	  var nav = $(navBar);
	        	  var windowObj = window;
	        	  if(windowObj.scrollTop()>=header.height()){
	        		  $(nav).addClass("affix");
	        		  $(nav).removeClass("affix-top");
	        	  }else{
	        		  $(nav).removeClass("affix");
        		  	  $(nav).addClass("affix-top");
	        	  }
	        	 }
	        	 
	        	 $(window).on('scroll resize', function() {
	        		 headerToggle("#headerBar","#nav" ,$(this));
	        	    });
	        	  
	        	  $(".panel a").click(function(e) {
	        		    e.preventDefault();
	        		    var style = $(this).attr("class");
	        		    $(".jetmenu").removeAttr("class").addClass("jetmenu").addClass(style);
	        		  });
	        		  $().jetmenu();
	          })
	       }
	    }
	});

dmsApp.directive( 'customTableElemReady', function( $parse ) {
	   return {
	       restrict: 'A',
	       link: function( $scope, elem, attrs ) {    
	          elem.ready(function(){
	        	  $('#dataTable').DataTable();
	          })
	       }
	    }
	});

dmsApp.directive('governmentListingHeader',function(){

	return {
		restrict : 'E',
		replace: 'false',
		templateUrl : 'resources/modules/templates/header/govheader.html'
	}
});

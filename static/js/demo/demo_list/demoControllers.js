var demoControllers = angular.module('demoControllers', []);

// Logout
demoControllers.controller('LogoutCtrl', function($scope){
	console.log('this is logout');
});

// Account Info
demoControllers.controller('AccountCtrl', function($scope, $routeParams){
	console.log('this is account');
});

// Follow Up
demoControllers.controller('FollowupCtrl', function($scope, $http, $routeParams){
	console.log('this is followup');
});

// Completed - My Processed
demoControllers.controller('CompletedProcessedCtrl', function($scope, $http, $routeParams, $cacheFactory){
	console.log('this is completed');
});

// Uncompleted - To be Assigned
demoControllers.controller('demoListUnassignCtrl', function($scope, $http, $routeParams, $cacheFactory){
	console.log('this is uncompleted');
});

demoControllers.controller('demoListCtrl', function($scope, $http, $cacheFactory, $document, $sce){
	console.log('this is demolist');
});


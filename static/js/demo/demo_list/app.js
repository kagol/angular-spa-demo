var demoApp = angular.module('demoApp', [
	'ngRoute',
	'demoControllers'
]);

demoApp.config(function($interpolateProvider, $routeProvider, $locationProvider) {
	/* 更改Angular模板标签的标志，将{{}}改成[[]] */
  	$interpolateProvider.startSymbol('[[');
  	$interpolateProvider.endSymbol(']]');

	$routeProvider.when('/', {
  		templateUrl: 'list_unassign.html',
  		controller: 'demoListUnassignCtrl'
  	}).when('/demo/list/unassign', {
  		templateUrl: 'list_unassign.html',
  		controller: 'demoListUnassignCtrl'
  	}).when('/demo/completed/processed', {
  		templateUrl: 'completed_processed.html',
  		controller: 'CompletedProcessedCtrl'
  	}).when('/demo/followup', {
  		templateUrl: 'followup.html',
  		controller: 'FollowupCtrl'
  	}).when('/account', {
  		templateUrl: 'account.html',
  		controller: 'AccountCtrl'
  	}).otherwise({
  		redirectTo: '/'
  	});
});


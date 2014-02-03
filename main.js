$(document).ready(function(){
	//alert('hi!!!!');
	
});
var demoApp = angular.module('demoApp',['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
		.when('/view1',
		{
			controller: 'SimpleController',
			templateUrl:'Partials/View1.html'
		})
		.when('/view2',
		{
			controller: 'SimpleController',
			templateUrl:'Partials/View2.html'
		})
		.otherwise({redirectTo:'/view1'});
});

demoApp.factory('simpleFactory',function(){
	var customers = [
	{name:'neha',city:'cuttack'},
	{name:'gayatri',city:'bhubaneswar'},
	{name:'ravi',city:'kolkatta'},
	{name:'sthita',city:'hyderabad'}
	];
	var factory = {};
	factory.getCustomers = function(){
		return customers;
	};
	factory.postCustomer = function(customer){
	
	};
	return factory;
});
//var controllers = {};
demoApp.controller('SimpleController', function($scope, simpleFactory){
	$scope.customers = [];
	init();
	function init(){
		$scope.customers = simpleFactory.getCustomers();
	};
	$scope.addCustomer = function(){
		$scope.customers.push({
			name: $scope.newCustomer.name,
			city: $scope.newCustomer.city
		});
	};
	$scope.removeCustomer = function(){
		$scope.customers.pop({
			name : $scope.newCustomer.name,
			city : $scope.newCustomer.city
		});
	};
});
//demoApp.controller(controllers);
(function() {
	'use strict';

	var calculateApp = angular.module("calculateApp", [
		"ngResource", 
		"ngRoute",
		"ngAnimate",
		"bmi.measurements",
		"bmi.users"
	]);

	/**
	 * Router
	 */
	calculateApp.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when("/", {
				redirectTo: "/calculate"
			})
			.when("/calculate", {
				templateUrl: "calculate.html",
				controller: "CalculateController"
			})
			.when("/result", {
				templateUrl: "result.html",
				controller: "ResultController"
			})
	});

	/**
	 * Main controller
	 * @return {void}
	 */
	calculateApp.controller("CalculateController", function($scope, $rootScope, $location, Measurements, Users) {
		// Declare an empty object to hold the values of the form
		$scope.form = {
			system: "metric"
		};

		var user = Users.get(function() {
			$scope.form.weight = user.lastWeight ? user.lastWeight : null;
			$scope.form.height = user.lastHeight ? user.lastHeight : null;	
		});

		$scope.showMessage = false;
		$scope.calculateBMI = function() {
			
			// if the user selects the imperial system, show a message
			if($scope.form.system == "imperial") {
				$scope.message = "Only metric system for now!";
				$scope.showMessage = true;
			}

			$rootScope.result = Measurements.save($scope.form);

			// redirect to the route with the result on the $rootScope.result
			$location.path("result");
		};
	});

	calculateApp.controller("ResultController", function($scope, $rootScope, $location, $routeParams) {
		$scope.result = $rootScope.result;
	});
})();
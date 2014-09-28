(function() {
	'use strict';

	var calculateApp = angular.module("calculateApp", [
		"ngResource", 
		"le.backstretch",
		"bmi.measurements",
		"bmi.users"
	]);

	/**
	 * Main controller
	 * @return {void}
	 */
	calculateApp.controller("CalculateController", function($scope, Measurements, Users) {
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

			var response = Measurements.save($scope.form);

			// redirect to the route with the result
		};

	});
})();
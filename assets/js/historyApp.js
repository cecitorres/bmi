(function() {
	'use strict';

	var historyApp = angular.module("historyApp", [
		"bmi.measurements", 
		"angularMoment"
	]);

	historyApp.controller("HistoryController", ["$scope", "Measurements", function($scope, Measurements) {
		$scope.meassurements = Measurements.index({limit: 30, sort: "createdAt desc"});
	}]);

})();
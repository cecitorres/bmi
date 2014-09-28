(function() {
	'use strict';

	var historyApp = angular.module("historyApp", [
		"bmi.measurements", 
		"angularMoment"
	]);

	historyApp.controller("HistoryController", function($scope, Measurements) {
		$scope.meassurements = Measurements.index({limit: 30, sort: "createdAt desc"});
	});

})();
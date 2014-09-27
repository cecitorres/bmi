(function() {
	'use strict';

	var historyApp = angular.module("historyApp", ["bmi.measurements", "le.backstretch"]);

	historyApp.controller("HistoryController", function($scope, Measurements) {
		$scope.meassurements = Measurements.index();
	});

})();
(function() {
	'use strict';
	angular.module("bmi.measurements", ["ngResource"])
		.service("Measurements", ["$resource", function($resource) {
			var baseUrl = "/api/v1/measurements/:id";
			return $resource(baseUrl, {
				id: "@id",
			}, {
				get: {
					method: "GET",
					isArray: false
				},
				save: {
					method: "POST",
					isArray: false
				},
				index: {
					method: "GET",
					isArray: true,
					params: {
						limit: "@limit",
						sort: "@sort"
					}
				},
				remove: {
					method: "DELETE",
					isArray: false
				}
			})
		}]);
})();
(function() {
	'use strict';
	angular.module("bmi.users", ["ngResource"])
		.service("Users", ["$resource", function($resource) {
			var baseUrl = "/api/v1/users/:id";
			return $resource(baseUrl, {
				id: "@id",
			}, {
				get: {
					method: "GET",
					isArray: false
				}
			})
		}]);
})();
(function() {
	'use strict';
	
	angular.module('le.backstretch', [])
		.directive('backstretch', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attr) {
					element.backstretch(attr.image);
				}
			}
		});
})();
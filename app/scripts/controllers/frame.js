'use strict';

angular.module('iphoneTemplate')
	.controller('FrameCtrl', function ($scope, $state) {
		$scope.$state = $state;
		//create image states
		$scope.imageStates = [];
		for (var i = 1; i < 9; i++) {
			var newVal = {
				name: 'DFMobile' + [i],
				show: false
			};
			//Allow a start point
			if (newVal.name === 'DFMobile1') {
				newVal.show = true;
			}
			$scope.imageStates.push(newVal);
		}
	});
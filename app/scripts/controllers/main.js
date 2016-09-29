'use strict';

angular.module('iphoneTemplate')
	.controller('MainCtrl', function ($scope, $state, $timeout) {
		$scope.$state = $state;
		$scope.appLoad = false;

		$scope.goToCumulus = function() {
			$scope.imageStates[1].show = true;
			$timeout(function() {
				$scope.appLoad = true;
			}, 200);
		};

		$scope.filterImages = function() {
			$scope.newArray = [];
			for (var i = 2; i < $scope.imageStates.length; i++) {
				$scope.newArray.push($scope.imageStates[i]);
			}
			return $scope.newArray;
		};

		$scope.standardImages = $scope.filterImages();

		$scope.standardStep = function(currentStep) {
			//Don't allow click at end of image loop
			if(currentStep === 5) {
				return;
			}
			else {
				var current = currentStep;
				var next = currentStep + 1;
				$scope.standardImages[current].show = false;
				$scope.standardImages[next].show = true;
			}
		};
	});

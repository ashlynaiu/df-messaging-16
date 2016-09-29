'use strict';

angular.module('DF16Messaging')
	.controller('MainCtrl', function ($scope, $state, $timeout) {
		$scope.$state = $state;
		$scope.appLoad = false;

		$scope.goToCumulus = function() {
			$scope.imageStates[1].show = true;
			$timeout(function() {
				$scope.appLoad = true;
			}, 200);
		};

		//Create function new array for ng-repeat images
		$scope.filterImages = function() {
			$scope.newArray = [];
			for (var i = 2; i < $scope.imageStates.length; i++) {
				$scope.newArray.push($scope.imageStates[i]);
			}
			return $scope.newArray;
		};

		//Assign filter array function to new scope
		$scope.standardImages = $scope.filterImages();

		//Standard step through click function
		$scope.standardStep = function(currentStep) {
			//Don't allow click at end of image loop
			if(currentStep === 5) {
				return;
			}
			else {
				//Turn off background images when we get started
				if(currentStep === 0) {
					$scope.imageStates[0].show = false;
					$scope.imageStates[1].show = false;
				}

				//Set up current and next step variables
				var current = currentStep;
				var next = currentStep + 1;

				//Delay ng-ifs for better transitions
				$timeout(function() {
					$scope.standardImages[next].show = true;
					$timeout(function() {
						$scope.standardImages[current].show = false;
					}, 200);
				}, 200);
			}
		};
	});

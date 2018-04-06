var check_ctl = ["$scope", "$rootScope", "$http", function($scope, $rootScope, $http) {
	$scope.name = "check1";
	$scope.sol1 = "short cuts make long delays";
	$scope.sol2 = "games make cakes, quakes sway wakes, coke soaks sacks";

	$scope.check_correct1 = function () {
		if(typeof($rootScope.check1) === 'undefined') return false;
		if($rootScope.check1.includes($scope.sol1)) return true;
		else return false;
	}

	$scope.check_correct2 = function () {
		console.log($rootScope.check2);
		if(typeof($rootScope.check1) === 'undefined') return false;
		if($rootScope.check2.includes($scope.sol2)) return true;
		else return false;
	}
}];
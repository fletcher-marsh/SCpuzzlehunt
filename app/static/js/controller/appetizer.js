var appetizer_ctl = ["$scope", "$rootScope", "$http", function($scope, $rootScope, $http) {
	$scope.name = "appetizer";
	$rootScope.check1 = "";
	$rootScope.check2 = "";
	$scope.check_input = function () {
		console.log("asdkfhj");
		$rootScope.check1 = $("#appetizer_input").val();
	}
}];
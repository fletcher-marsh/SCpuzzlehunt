var entree_ctl = ["$scope", "$rootScope", "$http", function($scope, $rootScope, $http) {
	$scope.name = "entree";
	$rootScope.check1 = "";
	$rootScope.check2 = "";
	$scope.check_input = function () {
		console.log("asdkfhj");
		$rootScope.check2 = $("#entree_input").val();
		console.log($rootScope.check2);
	}
}];
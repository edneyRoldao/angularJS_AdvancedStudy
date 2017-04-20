// This is the first approach to import $scope, it is not commonly used in real projects
function MainController($scope) {
	$scope.name = "Edney";
}

angular.module("app").controller("MainController", MainController);
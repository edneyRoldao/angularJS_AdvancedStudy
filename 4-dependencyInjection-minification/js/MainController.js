/*
	This approach to import dependencies are more safe.
	We must to pay attention the order of DI array
*/
function MainController(arg01, arg02) {
	arg01.name = "Edney"; // $scope
	arg02.lastName = "Roldao"; // $rootScope
}

MainController.$inject = ['$scope', '$rootScope'];

angular.module("app").controller("MainController", MainController);

/*
	Another injection dependency approach.
	In this example the last element from array must be the controller function
*/
function MainController(arg01, arg02) {
	arg01.name = "Edney"; // $scope
	arg02.lastName = "Roldao"; // $rootScope
}

angular.module("app").controller("MainController", [
		'$scope',
		'$rootScope',
		MainController
	]);

/*
	The course author he rather use the very first approach by using $inject
*/
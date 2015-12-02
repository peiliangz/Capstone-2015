
var app = angular.module('installPage', ['ui.bootstrap']);


function installCtrl($scope, $http) {
	var installList = [];
	installList[1] = "mac-install";
	installList[2] = "windows-install";
	installList[3] = "linux-install";

	$scope.selectOS = function(os) {

	};
}

app.controller('installCtrl', installCtrl);